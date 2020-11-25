import '../assets/css/Message.css'
export function Message(props) {
    return (
        <div className={props.belongTo == "02" ? "income" : "outcome"}>
            <p >{props.content}</p>
        </div>
    )
}