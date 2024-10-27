import { SupportChatPanel } from "@/components/chat/support-chat-panel";
import { nanoid } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";

export default async function SupportChat() {
    const id = nanoid()
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <div className="min-h-screen flex flex-col gap-4 items-center">
            <SupportChatPanel id={id} user={user} />
        </div>
    )
}