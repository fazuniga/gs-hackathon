// @ts-nocheck
import "server-only";
import {
	getMutableAIState,
	getAIState,
	createAI,
	streamUI
} from "ai/rsc";

// import { getSession } from "../auth";
import { z } from "zod";
import { mistral } from "@ai-sdk/mistral"
import { openai } from "@ai-sdk/openai"
import { cn, nanoid } from "@/lib/utils";
import { SYSTEM_MESSAGE } from "../config";
import { BotCard, AssistantMessage, LoadingMessage, UserMessage } from "@/components/chat/message";
// import { getVehicleStatus, getBookingInfo, getVehicleDetail, getDriverProfile, searchDriver, getDriverRatings, getBookings, getZonaIluminadaServices } from "./functions";
// import { VehicleStatusSearch } from "@/components/chat/search/vehicle-status-search";
import { generateText } from "ai";
import { useSupabaseUser } from "@/hooks/use-supabase-user";
import { createClient } from '@/utils/supabase/server'; // Import the createClient function from the correct path
import { getCategoryFromAgent, getSeverityFromAgent } from "./functions";
import { Badge } from "@/components/ui/badge";

// const modelInstanceMistral = mistral('mistral-large-latest')
const modelInstanceOpenAI = openai('gpt-4o')

async function submitUserMessage(content: string) {
	"use server";
	const supabase = await createClient();
	const { data: { user } } = await supabase.auth.getUser();

	const aiState = getMutableAIState<typeof AI>();

	aiState.update({
		...aiState.get(),
		messages: [
			...aiState.get().messages,
			{
				role: "user",
				content: `${content.trim()}`,
			},
		],
	});

	const ui = await streamUI({
		model: modelInstanceOpenAI,
		system: SYSTEM_MESSAGE,
		messages: aiState.get().messages.filter(m => m.role !== 'function'),
		text: ({ content, done }) => {
			if (done) {
				aiState.done({
					...aiState.get(),
					messages: [
						...aiState.get().messages,
						{
							role: "assistant",
							content: content.trim(),
						},
					],
				});
			}
			return <AssistantMessage content={content.trim()} />
		},
		tools: {
			problemCategory: {
				description: 'Utiliza esta herramienta para determinar la categoría del problema que describe el usuario.\
				Ejemplos de categorías puede ser: Hardware, Software, Problemas de Red, entre otros',
				parameters: z.object({
					problem: z.string().describe('La descripción del problema entregada por el usuario')
				}).required(),
				generate: async function* ({ problem }) {
					yield <LoadingMessage text={`Estableciendo la categoría..`} />

					const category = await getCategoryFromAgent(aiState.get().messages)

					aiState.update({
						...aiState.get(),
						messages: [
							...aiState.get().messages,
							{
								role: 'assistant',
								content: `Problema: ${problem} - Categoría: ${category}`
							},
						]
					})

					return (
						<BotCard>
							<div className="flex flex-col gap-2 items-center justify-start">
								<div className="flex flex-row gap-2 items-center">
									<span className="font-semibold">Problema</span>
									<span className="font-normal">{problem}</span>
								</div>
								<Badge variant={"outline"}>
									Categoría: {category}
								</Badge>
							</div>
						</BotCard>
					)
				}
			},
			problemSeverity: {
				description: 'Utiliza esta herramienta para determinar la severidad del problema que describe el usuario.\
				Ejemplos de severidad puede ser: 1/Bajo impacto, entre otros',
				parameters: z.object({
					problem: z.string().describe('La descripción del problema entregada por el usuario')
				}).required(),
				generate: async function* ({ problem }) {
					yield <LoadingMessage text={`Estableciendo la severidad...`} />

					const severity = await getSeverityFromAgent(aiState.get().messages)
					const severityLevel = severity.split(" / ")[0]
					const severityDescription = severity.split(" / ")[1]

					aiState.update({
						...aiState.get(),
						messages: [
							...aiState.get().messages,
							{
								role: 'assistant',
								content: `Problema: ${problem} - Severity: ${severity}`
							},
						]
					})

					return (
						<BotCard>
							<div className="flex flex-col gap-2 items-center justify-start">
								<div className="flex flex-row gap-2 items-center">
									<span className="font-semibold">Problema</span>
									<span className="font-normal">{problem}</span>
								</div>
								<span>{ severityDescription }</span>
								<Badge variant={"outline"} className={cn('bg-white', severityLevel <= 2 ? 'bg-green-400' : 'bg-orange-400')}>
									Severidad: NIVEL {severityLevel}
								</Badge>
							</div>
						</BotCard>
					)
				}
			},
		},
	})

	return {
		display: ui.value
	}
}

export type Message = {
	role: "user" | "assistant" | "system" | "function" | "data" | "tool";
	content: string;
	id?: string;
	name?: string;
	display?: {
		name: string;
		props: Record<string, any>;
	};
};

export type AIState = {
	chatId: string;
	interactions?: string[];
	messages: Message[];
};

export type UIState = {
	id: string;
	display: React.ReactNode;
	spinner?: React.ReactNode;
	attachments?: React.ReactNode;
}[];

export const AI = createAI<AIState, UIState>({
	actions: {
		submitUserMessage,
	},
	initialUIState: [],
	initialAIState: { chatId: nanoid(), interactions: [], messages: [] },
	onGetUIState: async () => {
		"use server";
		const supabase = await createClient();
		const { data: { user } } = await supabase.auth.getUser();

		if (user) {
			const aiState = getAIState();

			if (aiState) {
				const uiState = getUIStateFromAIState(aiState);
				return uiState;
			}
		} else {
			return;
		}
	},
	onSetAIState: async ({ state }) => {
		"use server";
		const supabase = await createClient();
		const { data: { user } } = await supabase.auth.getUser();

		if (user) {
			const { chatId, messages } = state;

			const createdAt = new Date();
			const userId = user.email;
			const path = `/chat/${chatId}`;
			const title = messages[0].content.substring(0, 100);

			const chat: Chat = {
				id: chatId,
				title,
				userId,
				createdAt,
				messages,
				path,
			};
			//   await saveChat(chat);
		} else {
			return;
		}
	},
});

export const getUIStateFromAIState = (aiState: Chat) => {
	return aiState.messages
		.filter(message => message.role !== 'system')
		.map((message, index) => ({
			id: `${aiState.chatId}-${index}`,
			display:
				message.role === 'user' ? (
					<UserMessage content={message.content} />
				) : (
					<AssistantMessage content={message.content} />
				)
		})
		)
}