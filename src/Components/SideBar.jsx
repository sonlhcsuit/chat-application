import '../assets/css/SideBar.css'
import { SearchBar } from './SearchBar'
import { ConversationList } from '../Components/ConversationList'
import { PathContext } from "../Context/PathContext";
export function SideBar(props) {

    // user info to load profile
    // 'select' func used to select specific conversation
    return (
        <PathContext.Consumer>
            {
                (context) => {
                    return (
                        <div className="sidebar-area">
                            <SearchBar {...context} />
                            <ConversationList {...context} />
                        </div>

                    )
                }
            }

        </PathContext.Consumer>
    )
}