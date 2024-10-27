import { UIState } from '@/lib/chat/actions'
import { nanoid } from 'nanoid'

export interface ChatList {
    messages: UIState
    session?: any // Session
    isShared: boolean
}

export function MessagesList({ messages, session, isShared }: ChatList) {
    if (!messages.length) return null

    return (
        <div className="messages-list">
            { messages.map(message => (
                <div className='message-item' key={message.id + nanoid()}>
                    {message.display}
                    {/* {message.spinner} */}
                    {/* {message.attachments} */}
                </div>
            )) }
        </div>
    )
}