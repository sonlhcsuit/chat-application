import { MessagesContainer } from './MessagesContainer'
import { ChatInput } from './ChatInput'
import { Conversation } from './Conversation'
import { Headbar } from './Headbar'
import '../assets/css/Main.css'
import React from 'react'






export function Main() {
    return (
        <div className="main-area main-cont border">
            <Headbar />
            <Conversation />
            <ChatInput />
        </div>

    )
}