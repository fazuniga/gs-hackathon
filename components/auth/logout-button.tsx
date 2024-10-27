import { signOutAction } from "@/app/actions";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";

export default function LogoutButton({ ...props }) {
    return (
        <form action={signOutAction} {...props}>
            <Button>
                <LogOutIcon className="mr-2 h-4 w-4" /> Salir
            </Button>
        </form>
    )
}