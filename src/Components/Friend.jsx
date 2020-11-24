// import React from 'react'
import '../assets/css/Friend.css'
export function Friend(props) {
    return (
        <div className={`friend-cont ${props.selected?'selected':''}`} onClick={props.select}>
            <img className="friend-avatar" src={props.image} />
            <div className="">
                <h3>{props.name}</h3>
                <small>{props.lastmes}</small>
            </div>

        </div>
    )
}