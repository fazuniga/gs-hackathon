import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { platformName } from "@/lib/platform/config";
import { Routes } from "@/lib/platform/routes";

export default function HomeHeader({ currentTheme, setColorTheme } : {
    currentTheme: any
    setColorTheme: any
}) {
    return (
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="text-2xl font-bold">{ platformName }</div>
            <nav className="flex flex-row items-center">
                <div className="hidden md:flex flex-row items-center gap-2">
                    <Button variant="ghost" onClick={() => setColorTheme('light')} 
                        className={currentTheme.name === 'light' ? 'bg-slate-600 text-white' : ''}>
                        <SunIcon className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" onClick={() => setColorTheme('dark')}
                        className={currentTheme.name === 'dark' ? 'bg-gray-200 text-slate-900' : ''}>
                        <MoonIcon className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" onClick={() => setColorTheme('purple')}
                        className={currentTheme.name === 'purple' ? 'bg-purple-200 text-purple-900' : ''}>P
                    </Button>
                </div>
                <Link href={Routes.LOGIN} className="ml-4">
                    <Button className={cn('px-6 shadow-lg', currentTheme.secondary)}>Ingresar</Button>
                </Link>
            </nav>
        </header>
    )
}