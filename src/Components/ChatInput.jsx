import '../assets/css/ChatInput.css'
import { Component } from 'react'
import { sendMessage } from '../ultis/messengerUltis'
//where you enter text
export class ChatInput extends Component {
    constructor(props) {
        super(props)
        this.state = { content: '' }
    }
    handleEnter = (e) => {
        let destination = this.props.userInfo.userId
        // console.log(destination)
        if (e.key == 'Enter') {
            let message = {
                created: new Date().valueOf(),
                belongTo: destination,
                content: e.target.value,
                type: 'text',
                conversationId: this.props.conversationInfo.conversationId
            }
            // clear input chat
            sendMessage(message)
                .then(() => {
                    this.setState({ content: '' })
                })

        }
    }
    handleChange = (e) => {
        this.setState({ content: e.target.value })
    }
    render() {
        return (
            <div className="chat-input-area chat-input-cont">
                <i className="fas fa-plus chat-input-btn"></i>
                <input type="text" value={this.state.content} className="chat-input-text" placeholder="Enter your message" onChange={this.handleChange} onKeyDown={this.handleEnter} />
                <i className="fas fa-paper-plane chat-input-btn"></i>
            </div>
        )
    }

}