import logo from './logo.svg';
import './App.css';
// import { FriendContainer } from './Components/FriendContainer'
import { MessagesContainer } from './Components/MessagesContainer'
import { SideBar } from './Components/SideBar'
function App() {
  return (
    <div className="container row">
      {/* <FriendContainer className="frcont child" /> */}
      <SideBar />
      <MessagesContainer className="mescont child" />
    </div>
  )
}

export default App;
