import '../assets/css/ConversationContent.css'
import { MessagesContainer } from './MessagesContainer'
// message content
export function ConversationContent() {
    return (
        <div className="conversation-content-area">
            <MessagesContainer />
        </div>
    )
}