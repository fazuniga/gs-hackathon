import LogoutButton from "../auth/logout-button";
import UserDetails from "../auth/user-details";
import PlatformLogo from "../logo";
import { Button } from "../ui/button";
import { RotateCcw, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Translations } from "./dashboard";

export default function DashboardHeader({ t } : { t: Translations }) {
    return (
        <header className="bg-background border-b">
            <div className="flex items-center justify-between px-4 py-3">
                <h2 className="text-lg font-semibold flex flex-row items-center gap-1">
                    <PlatformLogo />
                    {t.dashboard}
                </h2>
                <div className="flex flex-row gap-6 items-center justify-center">
                    <UserDetails />
                    <LogoutButton className={"ml-auto"} />
                </div>
            </div>
        </header>
    )
}