import { Routes } from "@/lib/platform/routes";
import Image from "next/image";
import Link from "next/link";

export default function PlatformLogo({ size = 50 } : { size?: number }) {
    return (
        <Link href={Routes.HOME}>
            <Image src={"/images/logo.png"} width={size || 50 } height={size || 50} alt={"Logo"} className="rounded-full p-1" />
        </Link>
    )
}
