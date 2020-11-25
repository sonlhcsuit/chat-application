
import { ChatInput } from './ChatInput'
import { ConversationContent } from './ConversationContent'
import { Headbar } from './Headbar'
import '../assets/css/Main.css'
import React from 'react'






export function Main(props) {
    return (
        <div className="main-area main-cont ">
            <Headbar conversationInfo={props.conversationInfo}/>
            <ConversationContent conversationInfo={props.conversationInfo} userInfo={props.userInfo} />
            <ChatInput conversationInfo={props.conversationInfo} userInfo={props.userInfo} />
        </div>

    )
}