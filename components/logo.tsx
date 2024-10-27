import { Routes } from "@/lib/platform/routes";
import Image from "next/image";
import Link from "next/link";

export default function PlatformLogo() {
    return (
        <Link href={Routes.HOME}>
            <Image src={"/images/logo.png"} width={50} height={50} alt={"Logo"} className="rounded-full p-1" />
        </Link>
    )
}