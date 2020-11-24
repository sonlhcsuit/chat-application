import '../assets/css/SearchBar.css'

function Profile(props) {
    return (
        <div className="profile-area">
            <img className="thumb" src="https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg" />
            <h2>Mindx Chatt</h2>
        </div>
    )
}
function Search(props){
    return (
        <div className="search-area">
            <input type="text" placeholder="Search"/>
        </div>
    )
}
export function SearchBar(props) {
    return (
        <div className="searchbar-area">
            <Profile />
            <Search />
        </div>
    )
}