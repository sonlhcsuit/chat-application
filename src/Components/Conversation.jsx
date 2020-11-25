// import React from 'react'
import '../assets/css/Conversation.css'
export function Conversation(props) {
    return (
        <div className={`conversation-area ${props.selected ? 'selected' : ''}`} onClick={props.select}>
            <img className="conversation-avatar" src={props.image} />
            <div className="">
                <h3>{props.name}</h3>
                <small>{props.lastmes}</small>
            </div>

        </div>
    )
}