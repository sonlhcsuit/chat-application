import React from 'react'
import { Friend } from './Friend'
import { friendsList } from '../resources/data'
import '../assets/css/FriendList.css'
export class FriendList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: 0 }
        this.select = this.select.bind(this)
    }
    componentWillMount() {
        this.setState({ friendsList: friendsList })
    }
    componentDidMount() {
        // this.setState({friendsList:friendsList})
    }
    select(indx) {
        this.setState({ selected: indx })
    }
    render() {
        let fris = this.state.friendsList.map((fr, indx) => {
            return (
                <Friend name={fr.name} image={fr.avtUrl} lastmes={fr.lastMessage} selected={indx == this.state.selected} select={() => this.select(indx)} />
            )
        })
        return (
            <div className="friendlist-area">
                {fris}
            </div>

        )
    }
}