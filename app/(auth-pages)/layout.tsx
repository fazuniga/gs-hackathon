import { Routes } from "@/lib/platform/routes";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({ children } : { children : React.ReactNode }) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect(Routes.LOGIN);
    }

    return <>{ children }</>
}