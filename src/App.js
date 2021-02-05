import { Component, Fragment } from 'react'
import './App.css';
import { Main } from './Components/Main'
import { SideBar } from './Components/SideBar'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'
import { ForgotPassword } from './Components/ForgotPassword'

let availableRoute = ['/signin', '/signup', '/',]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      at: '/',
      selectedConversation: null
    }
  }
  // navigate to page
  navigateTo = (path) => {
    window.location.assign(`${path}`)
  }
  // using to load content of selected conversation
  // only save infomation about conversation
  selectConversation = (conversation) => {
    this.setState({ selectedConversation: conversation })
  }
  isLoggedIn() {
    const user = localStorage.getItem('user')
    return user
  }
  // Mounted, then navigate to home (if user has logged in) or sign in 
  // componentDidMount() {
  //   let at = window.location.pathname.split('/')
  //   at.shift()
  //   if (localStorage.getItem('userId') !== null) {
  //     let userInfo = {
  //       userId: localStorage.getItem('userId'),
  //       avatar: localStorage.getItem('avatar'),
  //       name: localStorage.getItem('name')
  //     }
  //     this.setState({ at: 'home', userInfo: userInfo })
  //   } else {
  //     if (at[0] === 'home') {
  //       this.navigateTo('signin')
  //       at[0] = ''
  //     }
  //     this.setState({
  //       at: at[0] || 'signin'
  //     })
  //   }
  // }
  render() {
    // routing 
    console.log('render App')

    // If user are at home and didnt logged in , navigate to sign in 
    if (this.state.at === '/' && !this.isLoggedIn()) {
      window.history.pushState(null, null, '/signin')
      return <></>
    }
    else {
      let option = {
        '/ignin': <SignIn navigateToHome={() => this.navigateTo('home')} navigateToForgotPassword={() => this.navigateTo('forgot')} navigateToSignUp={() => this.navigateTo('signup')} />,
        '/signup': <SignUp navigateToSignIn={() => this.navigateTo('signin')} />,
        // 'forgot': <ForgotPassword navigateToSignIn={() => this.navigateTo('signin')} navigateToSignUp={() => this.navigateTo('signup')} />,
        '/': (
          <Fragment>
            <SideBar userInfo={this.state.userInfo} select={this.selectConversation} />
            <Main userInfo={this.state.userInfo} conversationInfo={this.state.selectedConversation} />
          </Fragment>
        )
      }

      return (
        <div className="container row">
          {
            option[this.state.at]
          }
        </div>
      )
    }

  }
}
export default App;
