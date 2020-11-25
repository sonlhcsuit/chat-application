import '../assets/css/ChatInput.css'
//where you enter text
export function ChatInput() {
    return (
        <div className="chat-input-area chat-input-cont">
            <i className="fas fa-plus chat-input-btn"></i>
            <input type="text" className="chat-input-text" placeholder="Enter your message"/>
            <i className="fas fa-paper-plane chat-input-btn"></i>

        </div>
    )
}