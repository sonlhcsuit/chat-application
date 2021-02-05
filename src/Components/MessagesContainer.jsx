import '../assets/css/MessagesContainer.css'
import { Message } from './Message'
export function MessagesContainer(props) {
    // console.log(props)
    let messages = props.messages || []

    // sort by time
    messages = messages.sort((a, b) => a.created - b.created)
    messages = messages.map((message, indx) => {
        // console.log(message.belongTo)
        let blt = props.user.id === message.belongTo ? 'outcome' : 'income'
        return <Message belongTo={blt} content={message.content} key={indx} />
    })
    return (
        <div className="message-container-area " id="mc">
            {
                messages
            }
        </div>
    )

}