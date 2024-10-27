import { SupportChatPanel } from "@/components/chat/support-chat-panel";
import { nanoid } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";

export default async function SupportChat() {
    const getSupabaseUser = async () => {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        return user
    }

    const id = nanoid()
    const user = await getSupabaseUser()

    return (
        <div className="min-h-screen flex flex-row gap-4 items-center">
            <SupportChatPanel id={id} user={user} />
        </div>
    )
}