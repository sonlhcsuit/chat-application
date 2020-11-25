import '../assets/css/SideBar.css'
import { SearchBar } from './SearchBar'
import { FriendList } from '../Components/FriendList'
export function SideBar(props) {
    return (
        <div className="sidebar-area">
            <SearchBar userInfo={props.userInfo}/>
            <FriendList />
        </div>
    )
}