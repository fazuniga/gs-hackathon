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
import { nanoid } from "@/lib/utils";
import { SYSTEM_MESSAGE } from "../config";
import { BotCard, AssistantMessage, LoadingMessage, UserMessage } from "@/components/chat/message";
// import { getVehicleStatus, getBookingInfo, getVehicleDetail, getDriverProfile, searchDriver, getDriverRatings, getBookings, getZonaIluminadaServices } from "./functions";
// import { VehicleStatusSearch } from "@/components/chat/search/vehicle-status-search";
import { generateText } from "ai";
import { useSupabaseUser } from "@/hooks/use-supabase-user";
import { createClient } from '@/utils/supabase/server'; // Import the createClient function from the correct path

const modelInstanceMistral = mistral('mistral-large-latest')
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
		// model: modelInstanceMistral,
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
			createSuggestion: {
				description: `Utiliza esta herramienta cada vez que necesites dar sugerencias
				al usuario de pasos que puede seguir para solucionar su problema de su mouse`.trim(),
				parameters: z.object({
					suggestion: z
						.string()
						.describe("La sugerencia entregada hasta ahora por el experto IT")
				}).required(),
				generate: async function* ({ suggestion }) {
					yield <LoadingMessage text={`Buscando...`} />

					console.log(suggestion);

					aiState.done({
						...aiState.get(),
						messages: [
							...aiState.get().messages,
							{
								role: 'assistant',
								content: `Mostrando información: ${suggestion}`
							},
						]
					})

					return (
						<BotCard>
							<div className="text-red-300">Sugerencia: {suggestion}</div>
						</BotCard>
					)
				}
			},
		},
	})

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
