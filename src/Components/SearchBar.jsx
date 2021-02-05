import '../assets/css/SearchBar.css'
import { signOutUltis } from '../ultis/userUltis'
function Profile(props) {
    let userInfo = props.userInfo
    return (
        <div className="profile-area">
            <img className="thumb" src={userInfo?.avatar || 'https://image.flaticon.com/icons/png/512/21/21104.png'} alt="avatar" />
            <h2>Mindx Chat</h2>
            <i className="fal fa-sign-out" style={{ cursor: 'pointer' }} onClick={signOutUltis}></i>
        </div>
    )
}
function Search(props) {
    return (
        <div className="search-area">
            <input type="text" placeholder="Search" />
        </div>
    )
}
export function SearchBar(props) {
    return (
        <div className="searchbar-area">
            <Profile userInfo={props.userInfo} />
            <Search />
        </div>
    )
}