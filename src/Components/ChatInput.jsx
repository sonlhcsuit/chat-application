import '../assets/css/ChatInput.css'
//where you enter text
export function ChatInput() {
    return (
        <div className="chat-input-area chat-input-cont">
            <i className="fal fa-plus fa-2x chat-input-btn"></i>
            <input type="text" className="chat-input-text" placeholder="Enter your message"/>
            <i className="fal fa-paper-plane fa-2x chat-input-btn"></i>

        </div>
    )
}