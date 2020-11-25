import React from 'react'
import '../assets/css/MessagesContainer.css'
import { messageList } from '../resources/data'
import { Message } from './Message'
export class MessagesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { messages: messageList[0] }
    }
    componentDidMount() {
        console.log(this.state)
    }
    render() {
        let mes = this.state.messages.message.map((mes,indx) => {
            return <Message belongTo={mes.belongTo} content={mes.content} key={indx} />
        })
        return (
            <div className="message-container-area ">
                {mes}</div>
        )
    }
}