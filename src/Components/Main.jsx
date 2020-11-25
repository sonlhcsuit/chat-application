import { MessagesContainer } from './MessagesContainer'
import { ChatInput } from './ChatInput'
import { ConversationContent } from './ConversationContent'
import { Headbar } from './Headbar'
import '../assets/css/Main.css'
import React from 'react'






export function Main() {
    return (
        <div className="main-area main-cont ">
            <Headbar />
            < ConversationContent/>
            <ChatInput />
        </div>

    )
}