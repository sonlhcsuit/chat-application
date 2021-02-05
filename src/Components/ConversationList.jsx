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
            isSubscribed: false,
            selected: null

        }
        // this.select = this.select.bind(this)
    }
    componentDidMount() {
        const loggedUser = this.props.user
        console.log(loggedUser)
        if (loggedUser && !this.state.isSubscribed) {
            getConversationsAndParticipants(loggedUser.id)
                .then(convers => {
                    console.log(convers)
                    this.setState({
                        conversationList: convers,
                        isSubscribed: true,
                        selected: convers[0].conversationId
                    })
                })
        }
    }
    select = (id) => {
        this.setState({selected:id})
    }
    render() {
        const loggedUser = this.props.user

        let conversations = this.state.conversationList.map((conversation, indx) => {
            const { conversationId, participants } = conversation
            return (
                <Conversation key={indx}
                    user={loggedUser.userId}
                    id={conversationId}
                    name={participants.name}
                    image={participants.avatar} lastmes="12 hours ago"
                    selected={conversationId === this.state.selected} select={() => this.select(conversationId)}
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