import React from 'react'
import '../assets/css/MessagesContainer.css'
import { Message } from './Message'
import { getConversationOf, subscribeConversation } from '../Controllers/Controllers'
export class MessagesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { messages: [] }
    }
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.conversationInfo) != JSON.stringify(this.props.conversationInfo)) {
            this.setState({ messages: [] }, () => {
                subscribeConversation(this.props.conversationInfo.conversationId, (data) => {
                    this.setState((oldState) => {
                        let state = JSON.parse(JSON.stringify(oldState))
                        state.messages.push(data)
                        return state
                    })
                })
            })

        }
    }
    render() {
        let messages = this.state.messages
        messages = messages.sort((a, b) => a.created - b.created)
        messages = messages.map((message, indx) => {
            // console.log(message.belongTo)
            let blt = this.props.userInfo.userId === message.belongTo ? 'income' : 'outcome'
            return <Message belongTo={blt} content={message.content} key={indx} />
        })
        return (
            <div className="message-container-area ">
                {messages}
            </div>
        )
    }
}