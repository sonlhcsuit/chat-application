import { Component } from 'react'
import { ChatInput } from './ChatInput'
import { MessagesContainer } from './MessagesContainer'
import { HeadBar } from './HeadBar'
import { ConversationContext } from "../Context/ConversationContext";
import { PathContext } from "../Context/PathContext";
import { subscribeConversation, getConversationsInfoOf } from '../ultis/messengerUltis'

import '../assets/css/Main.css'

export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            conversations: [],
            unsubscribeFunction: [],
            indexes: {},
            user: null,


        }
    }
    addMessage = (message) => {
        const indx = this.state.indexes[message.conversationId]
        this.setState(oldState => {
            let newState = JSON.parse(JSON.stringify(oldState))
            newState.conversations[indx].messages.push(message)
            return newState
        })
    }
    // pass infomation about users and current conversation
    componentDidMount() {
        console.log(this.props.user.id)
        getConversationsInfoOf(this.props.user.id)
            .then(convers => {
                const indexes = {}
                convers.forEach((conv, indx) => {
                    indexes[conv.conversationId] = indx
                })
                const unsubs = convers.map(conv => {
                    return subscribeConversation(conv.conversationId, this.addMessage)
                })
                // this one run finish first, then some subscriber
                Promise.all(unsubs).then(data => {
                    this.setState({
                        conversations: convers,
                        indexes: indexes,
                        unsubscribeFunction: data
                    })
                })
            })
    }
    render() {
        return (

            <ConversationContext.Provider value={this.state}>
                <div className="main-area main-cont ">
                    <PathContext.Consumer>
                        {
                            (context) => (
                                <>
                                    <HeadBar {...context} />
                                    <MessagesContainer
                                     {...this.state.conversations[this.state.indexes[context.selected]]}
                                     {...context}
                                     />
                                    <ChatInput {...context} />
                                </>
                            )

                        }
                    </PathContext.Consumer>
                    {/* <PathContext.Consumer>
                        {
                            (ctx) => (
                            )
                        }
                    </PathContext.Consumer> */}
                </div>

            </ConversationContext.Provider>
        )
    }
}