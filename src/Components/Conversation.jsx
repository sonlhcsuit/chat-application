import '../assets/css/Conversation.css'
import { MessagesContainer } from '../Components/MessagesContainer'
// message content
export function Conversation() {
    return (
        <div className="conversation-area">
            <MessagesContainer />
        </div>
    )
}