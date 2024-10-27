import { signOutAction } from "@/app/actions";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";

export default function LogoutButton({ ...props }) {
    return (
        <form action={signOutAction} {...props}>
            <Button variant={"outline"} className="text-slate-900">
                <LogOutIcon className="mr-2 h-4 w-4" /> Salir
            </Button>
        </form>
    )
}