import { FileSliders, GitCommit, Github, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { platform } from "@/lib/platform/config";
import { Routes } from "@/lib/platform/routes";
import Image from "next/image";

export default function HomeHeader({ currentTheme, setColorTheme } : {
    currentTheme: any
    setColorTheme: any
}) {
    return (
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex flex-row items-center gap-2">
                <Image src={"/images/logo.png"} height={50} width={50} className="rounded-full p-2" alt="Logo" />
                <div className="text-2xl font-bold">{ platform.name }</div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <Button className="rounded-xl">
                    <Link href={platform.githubURL} target="_blank" className="flex flex-row items-center gap-2">
                        <Github /> Repo Github
                    </Link>
                </Button>
                <Button className="rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black">
                    <Link href={platform.presoURL} target="_blank" className="flex flex-row items-center gap-2">
                        <FileSliders /> Presentación
                    </Link>
                </Button>
            </div>
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