// import React from 'react'
import '../assets/css/Friend.css'
export function Friend(props) {
    return (
        <div className="cont">
            <img className="avatar" src={props.image} />
            <div>
                <h1>{props.name}</h1>
                <p>{props.lastmes}</p>
            </div>

        </div>
    )
}