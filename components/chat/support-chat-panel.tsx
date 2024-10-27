import LogoutButton from "@/components/auth/logout-button"
import { SupportChat } from "./chat"
import UserDetails from "../auth/user-details"
import SupportChatSidebar from "./chat-sidebar"

export function SupportChatPanel({ id, user } : { id : string, user : any }) {
	return (
		<div className="grid h-screen size-full bg-white">
			<div className="flex flex-col">
				<header className="sticky top-0 z-10 flex h-[56px] items-center gap-1 bg-background px-4">
					<div className="ml-auto flex gap-4 items-center">
						<UserDetails />
						<LogoutButton className="ml-auto" />
					</div>
				</header>
				<div className="flex-1 md:min-w-[500px] mx-auto overflow-auto p-0 md:p-3 md:pt-0">
					<div className=" border flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-2 md:p-3">
						<SupportChat id={id} session={user} />
					</div>
					<div className="col-span-1 hidden">
						<SupportChatSidebar />
					</div>
				</div>
			</div>
		</div>
	)
}