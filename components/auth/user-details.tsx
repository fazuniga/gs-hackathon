import { createClient } from "@/utils/supabase/server";

export default async function UserDetails() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();
    if (!user) return

    return (
        <div className="flex flex-row gap-1 items-center justify-center">
            <span className="font-semibold">User:</span>
            <span className="font-normal">{ user.email }</span>
        </div>
    )
}