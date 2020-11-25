import '../assets/css/Message.css'
export function Message(props) {
    return (
        <div className={props.belongTo}>
            <p >{props.content}</p>
        </div>
    )
}