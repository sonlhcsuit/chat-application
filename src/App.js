import logo from './logo.svg';
import { Component, Fragment } from 'react'
import './App.css';
import { Main } from './Components/Main'
import { SideBar } from './Components/SideBar'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'
import { ForgotPassword } from './Components/ForgotPassword'
class App extends Component {
  constructor(props) {
    super(props)
    let at = window.location.pathname.split('/')
    at.shift()
    this.state = {
      at: at[0] || 'signin'
    }
  }
  navigateTo=(path)=>{
    window.location.assign(`${path}`)
  }
  componentDidMount() {
  }
  render() {
    let option = {
      'signin': <SignIn navigateToForgotPassword={()=>this.navigateTo('forgot')} navigateToSignUp={()=>this.navigateTo('signup')} />,
      'signup': <SignUp navigateToSignIn={()=>this.navigateTo('signin')} />,
      'forgot': <ForgotPassword navigateToSignIn={()=>this.navigateTo('signin')} navigateToSignUp={()=>this.navigateTo('signup')} />,
      'home': (<Fragment>
        <SideBar />
        <Main />
      </Fragment>)
    }

    return (
      <div className="container row">
        {option[this.state.at]}
      </div>
    )
  }
}
export default App;
