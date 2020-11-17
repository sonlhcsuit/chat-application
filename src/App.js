import logo from './logo.svg';
import './App.css';
import { FriendContainer } from './Components/FriendContainer'
import { MessagesContainer } from './Components/MessagesContainer'

function App() {
  return (
    <div className="container row">
    {/* <> la react.fragment */}
      <FriendContainer className="frcont child" />
      <MessagesContainer className="mescont child" />
    </div>
  )
}

export default App;
