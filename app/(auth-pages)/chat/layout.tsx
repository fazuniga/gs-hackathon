import { AI } from "@/lib/chat/actions";
import { nanoid } from "@/lib/utils";

export default async function ChatLayout({ children } : { children : React.ReactNode }) {
    const id = nanoid()

    return (
        <AI initialAIState={{ chatId: id, interactions: [], messages: [] }}>
            <div className="flex min-h-screen w-full flex-col bg-transparent overflow-auto">
                {children}
            </div>
        </AI>
    )
}