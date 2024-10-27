import LogoutButton from "@/components/auth/logout-button"
import { SupportChat } from "./chat"
import UserDetails from "../auth/user-details"
import PlatformLogo from "../logo"
import { platform } from "@/lib/platform/config"

export function SupportChatPanel({ id, user } : { id : string, user : any }) {
	return (
		<div className="grid h-[calc(100vh-0px)] size-full bg-white">
			<div className="flex flex-col">
				<header className="sticky top-0 z-10 flex h-[56px] items-center gap-1 bg-background px-4">
					<PlatformLogo />
					<span className="font-semibold">{ platform.name }</span>
					<div className="ml-auto flex gap-4 items-center">
						<UserDetails />
						<LogoutButton className="ml-auto" />
					</div>
				</header>
				<div className="flex-grow md:min-w-[500px] mx-auto overflow-auto md:p-3 md:pt-1 w-full">
					<SupportChat id={id} session={user} />
				</div>
			</div>
		</div>
	)
}