import React from 'react'
import { Conversation } from './Conversation'
import { getConversationsInfoOf, getUserInfo, getConversationsAndParticipants } from '../ultis/messengerUltis'
import '../assets/css/ConversationList.css'
export class ConversationList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            conversationList: [],
            isSubscribed: false

        }
        this.select = this.select.bind(this)
    }
    componentDidUpdate() {
        const loggedUser = this.props.user

        if (loggedUser && !this.state.isSubscribed) {
            getConversationsAndParticipants(loggedUser.id)
                .then(convers => {
                    console.log(convers)
                    this.setState({
                        conversationList: convers,
                        isSubscribed: true
                    })
                })
        }


    }
    select(indx) {
        this.props.select(this.state.conversationList[indx])

        this.setState({ selected: indx })
    }
    render() {
        const loggedUser = this.props.user
        let conversations = this.state.conversationList.map((conversation, indx) => {
            return (
                <Conversation key={indx}
                    user={loggedUser.userId}
                    id={conversation.conversationId}
                    name={conversation.participants.name}
                    image={conversation.participants.avatar} lastmes="12 hours ago"
                    selected={indx === this.state.selected} select={() => this.select(indx)}
                />
            )
        })
        return (
            <div className="conversation-list-area">
                {conversations}
            </div>

        )
    }
}