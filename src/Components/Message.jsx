import '../assets/css/Message.css'
export function Message(props) {
    return (
        <div className={props.belongTo == "02" ? "receiver" : "sender"}>
            <p >{props.content}</p>
        </div>
    )
}