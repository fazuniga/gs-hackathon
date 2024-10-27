import LogoutButton from "@/components/auth/logout-button"
import { SupportChat } from "./chat"
import UserDetails from "../auth/user-details"
import PlatformLogo from "../logo"
import { platform } from "@/lib/platform/config"

export function SupportChatPanel({ id, user } : { id : string, user : any }) {
	return (
		<div className="grid h-[calc(100vh-0px)] size-full bg-gradient-to-br from-gray-200 to-gray-100">
			<div className="flex flex-col">
				<header className="sticky top-0 z-10 bg-slate-700 text-white flex h-[56px]_ items-center gap-1 bg-background px-4 py-2 shadow-lg">
					<PlatformLogo />
					<span className="font-semibold">{ platform.name }</span>
					<div className="ml-auto flex gap-4 items-center">
						<UserDetails />
						<LogoutButton className="ml-auto" />
					</div>
				</header>
				<div className="flex-grow bg-gray-50 sm:max-w-lg xl:max-w-2xl md:min-w-[500px] mx-auto overflow-auto md:p-3 md:pt-2 w-full">
					<SupportChat id={id} session={user} />
				</div>
			</div>
		</div>
	)
}