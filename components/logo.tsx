import { Routes } from "@/lib/platform/routes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function PlatformLogo({ size = 50, className } : { size?: number, className?: string }) {
    return (
        <Link href={Routes.HOME} className={cn(className)}>
            <Image src={"/images/logo.png"} width={size || 50 } height={size || 50} alt={"Logo"} className="rounded-full p-1" />
        </Link>
    )
}
