import '../assets/css/SideBar.css'
import { SearchBar } from './SearchBar'
import { ConversationList } from '../Components/ConversationList'
export function SideBar(props) {
    return (
        <div className="sidebar-area">
            <SearchBar userInfo={props.userInfo}/>
            <ConversationList userInfo={props.userInfo}/>
        </div>
    )
}