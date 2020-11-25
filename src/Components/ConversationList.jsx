import React from 'react'
import { Conversation } from './Conversation'
import { getConversationsInfoOf, getUserInfo } from '../Controllers/Controllers'
import '../assets/css/ConversationList.css'
export class ConversationList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: 0, conversationList: [] }
        this.select = this.select.bind(this)
    }
    componentDidMount() {

        getConversationsInfoOf(this.props.userInfo.userId)
            .then(async conversations => {
                let targets = conversations.map(conversation => {
                    return getUserInfo(conversation.target)
                })
                return Promise.all(targets).then(tars => {
                    return tars.map((tar, indx) => {
                        // console.log(tar)
                        return {
                            userId: tar.userId,
                            avatar: tar.avatar,
                            name: tar.name,
                            conversationId: conversations[indx].conversationId
                        }
                    })
                })
            })
            .then(data => {
                // console.log(data)
                this.setState((oldState) => {
                    return { conversationList: data }
                },()=>{
                    this.select(0)
                })
            })
    }
    select(indx) {
        this.props.select(this.state.conversationList[indx])

        this.setState({ selected: indx })
    }
    render() {
        let conversations = this.state.conversationList.map((conversation, indx) => {
            return (
                <Conversation key={indx} name={conversation.name} image={conversation.avatar} lastmes="12 hours ago" selected={indx === this.state.selected} select={() => this.select(indx)} />
            )
        })
        return (
            <div className="conversation-list-area">
                {conversations}
            </div>

        )
    }
}