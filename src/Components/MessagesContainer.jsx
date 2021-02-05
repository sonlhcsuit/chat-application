import React from 'react'
import '../assets/css/MessagesContainer.css'
import { Message } from './Message'
import { subscribeConversation } from '../ultis/messengerUltis'
export class MessagesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            isSubscribed:false,
            conversationId:null,
            messages: [] 
        }
    }
    // check current conversation info & new conversation info
    // if yes, clear state and subsribe to new conversation
    componentDidMount(){

    }
    componentDidUpdate(prevProps) {
        // subscribe 
        console.log('did dupdate')
        if(this.props.conversationInfo.conversationId != this.state.conversationId){
            // newly subscribe
            subscribeConversation(this.props.conversationInfo.conversationId,(data)=>{
                console.log(data.content)
            })
            
        }
        // console.log(this.props.conversationInfo)
        // console.log(this.props.userInfo)
        // console.log('did update')

        // if (JSON.stringify(prevProps.conversationInfo) !== JSON.stringify(this.props.conversationInfo)) {
        //     // new conversation, set entire message to empty, and subscribe to current conversation
        //     this.setState({ messages: [] }, () => {
        //         // each time new message come, upload state of messages 
        //         // message can be created using sendMessage function
        //         subscribeConversation(this.props.conversationInfo.conversationId, (data) => {
        //             // data is added data, update messages
        //             this.setState((oldState) => {
        //                 // create a deep copy, because we are reference to oldState, we duplicate add data
        //                 // 1st 
        //                 let state = JSON.parse(JSON.stringify(oldState))
        //                 state.messages.push(data) // 1 st
        //                 // oldState.messages.push(data)
        //                 return state // 2nd
        //             },()=>{
        //                 document.getElementById('mc').scrollBy(0,100)
        //             })
        //         })
        //     })

        // }
    }
    render() {
        // console.log(this.props.conversationInfo)
        // console.log(this.props.userInfo)

        let messages = this.state.messages
        // sort by time
        messages = messages.sort((a, b) => a.created - b.created)
        messages = messages.map((message, indx) => {
            // console.log(message.belongTo)
            let blt = this.props.userInfo.userId === message.belongTo ? 'outcome' : 'income'
            return <Message belongTo={blt} content={message.content} key={indx} />
        })
        return (
            <div className="message-container-area " id="mc">
                {
                messages
                }
            </div>
        )
    }
}