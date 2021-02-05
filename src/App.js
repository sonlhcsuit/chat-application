import { Component, Fragment } from 'react'
import './App.css';
import { Main } from './Components/Main'
import { SideBar } from './Components/SideBar'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'
// import { ForgotPassword } from './Components/ForgotPassword' 
import { PathContext } from './Context/PathContext'



let availableRoute = ['/signin', '/signup', '/',]

class App extends Component {
  constructor(props) {
    super(props)
    // if user are not logged, navigate to /signin
    let path = window.location.pathname
    const user = JSON.parse(localStorage.getItem('user')) || {}

    if (availableRoute.indexOf(path) === -1) path = '/'

    switch (path) {
      case '/signin':
        if (this.isLoggedIn())path = '/'
        break;
      case '/':
        if (!this.isLoggedIn()) path = '/signin'
        break;
      default:
        break;
    }

    if (path != window.location.pathname) window.history.pushState(null, null, path)
    
    this.state = {
      path: path,
      user: user,
      navigate: this.navigate,
      setUser: this.setUser,
    }
  }

  setUser = (user) => {
    this.setState({ user: user })
  }
  
  navigate = (path) => {
    window.history.pushState(null, null, path)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  
  isLoggedIn() {
    return localStorage.getItem('user')
  }
  componentDidMount() {
    // set up routing
    window.addEventListener('popstate', (e) => {
      e.preventDefault()
      this.setState({ path: window.location.pathname })
    })

  }

  render() {

    let path = window.location.pathname
    console.log(`Render ${path}`)
    let option = {
      '/signin': <SignIn />,
      '/signup': <SignUp navigateToSignIn={() => this.navigateTo('signin')} />,
      // 'forgot': <ForgotPassword navigateToSignIn={() => this.navigateTo('signin')} navigateToSignUp={() => this.navigateTo('signup')} />,
      '/': (
        <Fragment>
          <SideBar user={this.state.user} />
          <Main user={this.state.userInfo} conversationInfo={this.state.selectedConversation} />
        </Fragment>
      )
    }

    return (
      <div className="container row">
        <PathContext.Provider value={this.state}>
          {
            option[this.state.path]
          }
        </PathContext.Provider>

      </div>
    )
  }
}
export default App;
