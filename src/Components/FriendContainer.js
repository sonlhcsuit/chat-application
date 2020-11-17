import React from 'react'
import { Friend } from './Friend'
import { friendsList } from '../resources/data'
export class FriendContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {friendsList:friendsList}
    }
    componentDidMount() {
        // this.setState({friendsList:friendsList})
        console.log(this.state)
    }

    render() {
        let fris = this.state.friendsList.map(fr=>{
            return (
                <Friend name={fr.name} image={fr.avtUrl} lastmes={fr.lastMessage}/>
            )
        })
        return (
            <div className={this.props.className}>
                {fris}
            </div>

        )
    }
}