import '../assets/css/SideBar.css'
import { SearchBar } from './SearchBar'
import { FriendList } from '../Components/FriendList'
export function SideBar() {
    return (
        <div className="sidebar-area">
            <SearchBar />
            <FriendList />
        </div>
    )
}