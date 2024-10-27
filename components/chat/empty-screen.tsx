import PlatformLogo from "../logo"

export function EmptyScreen({ user }: { user: any }) {
    return (
        <div className="messages-list">
            <div className="chat-message assistant">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col lg:flex-row gap-1">
                        <span className="font-semibold">¡Hola, {user.email}!</span>
                        <span className="font-normal">Soy tu asistente.</span>
                    </div>
                    <span className="mt-2 font-bold">¿Con qué puedo ayudarte hoy?</span>
                </div>
                <div className="flex flex-row gap-2 justify-end items-center text-xs">
                    <PlatformLogo />
                </div>
            </div>
        </div>
    )
}