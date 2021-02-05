import '../assets/css/SideBar.css'
import { SearchBar } from './SearchBar'
import { ConversationList } from '../Components/ConversationList'
export function SideBar(props) {

    // user info to load profile
    // 'select' func used to select specific conversation
    return (
        <div className="sidebar-area">
            <SearchBar user={props.user}/>
            <ConversationList user={props.user}/>
        </div>
    )
}