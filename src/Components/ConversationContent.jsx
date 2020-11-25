import '../assets/css/ConversationContent.css'
import { MessagesContainer } from './MessagesContainer'
// message content
export function ConversationContent(props) {
    // console.log(props.conversationInfo,props.userInfo)

    return (
        <div className="conversation-content-area">
            <MessagesContainer conversationInfo={props.conversationInfo} userInfo={props.userInfo} />
        </div>
    )
}