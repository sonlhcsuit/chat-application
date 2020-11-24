import React from 'react'
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
        let mes = this.state.messages.message.map(mes => {
            return <Message belongTo={mes.belongTo} content={mes.content}/>
        })
        return (
            <div className={this.props.className} style={{overflow:'scroll'}}>
                {mes}</div>
        )
    }
}