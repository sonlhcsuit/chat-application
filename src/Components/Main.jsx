
import { ChatInput } from './ChatInput'
import { ConversationContent } from './ConversationContent'
import { HeadBar } from './HeadBar'
import '../assets/css/Main.css'
import React from 'react'

export function Main(props) {
    // pass infomation about users and current conversation
    return (
        <div className="main-area main-cont ">
            <HeadBar conversationInfo={props.conversationInfo}/>
            <ConversationContent conversationInfo={props.conversationInfo} userInfo={props.userInfo} />
            <ChatInput conversationInfo={props.conversationInfo} userInfo={props.userInfo} />
        </div>

    )
}