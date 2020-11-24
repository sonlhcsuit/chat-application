import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main'
import { SideBar } from './Components/SideBar'
function App() {
  return (
    <div className="container row">
      <SideBar />
      <Main/>
    </div>
  )
}

export default App;
