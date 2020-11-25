import React from 'react'
import '../assets/css/MessagesContainer.css'
import { Message } from './Message'
import { getConversationOf, } from '../Controllers/Controllers'
export class MessagesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { messages: [], fetched: false }
    }
    getMessages = () => {
        // console.log(this.props)
        if (this.props.conversationInfo == null) return null
        return getConversationOf(this.props.conversationInfo.conversationId)
            .then(data => {
                // console.log(data)
                this.setState({ messages: data, fetched: true })
            })
    }
    componentDidUpdate(prevProps) {
        // console.log(prevProps.conversationInfo)
        // console.log(this.props.conversationInfo)
        if (JSON.stringify(prevProps.conversationInfo) != JSON.stringify(this.props.conversationInfo)) {
            // console.log('????')
            // console.log('////////')
            this.getMessages()

        }
    }
    componentDidMount() {
        // console.log(this.props)
    }
    // }conversationInfo={props.conversationInfp} userInfo={props.userInfo}
    render() {
        // console.log('render')
        let messages = this.state.messages.map((message, indx) => {
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