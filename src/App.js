import { Component, Fragment, createContext } from 'react'
import './App.css';
import { Main } from './Components/Main'
import { SideBar } from './Components/SideBar'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'
import { ForgotPassword } from './Components/ForgotPassword'
import { PathContext } from './Context/PathContext'



let availableRoute = ['/signin', '/signup', '/',]



class App extends Component {
  constructor(props) {
    super(props)
    // const user = JSON.parse(localStorage.getItem('user'))
    this.state = {
      at: '/',
      // user: user.name,
      user:{},
      selectedConversation: null,
      setUser: this.setUser
    }
  }
  setUser = () => {
    this.setState({ user: user })
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        <SignIn/>
      </UserContext.Provider>
    )

  }






  // navigate to page
  // navigateTo = (path) => {
  //   window.location.assign(`${path}`)
  // }
  // // using to load content of selected conversation
  // // only save infomation about conversation
  // selectConversation = (conversation) => {
  //   this.setState({ selectedConversation: conversation })
  // }
  // isLoggedIn() {
  //   const user = localStorage.getItem('user')
  //   return user
  // }
  // componentDidMount() {
  //   // or fetching data from here
  //   if (localStorage.getItem('user') !== null) this.setState({ user: JSON.parse(localStorage.getItem('user')) })
  // }
  // render() {
  //   // If user are at home and didnt logged in , navigate to sign in 
  //   if (this.state.at === '/' && !this.isLoggedIn()) {
  //     window.history.pushState(null, null, '/signin')
  //     this.setState({ at: '/signin' })
  //     return <></>
  //   }
  //   else {
  //     let option = {
  //       '/signin': <SignIn navigateToHome={() => this.navigateTo('home')} navigateToForgotPassword={() => this.navigateTo('forgot')} navigateToSignUp={() => this.navigateTo('signup')} />,
  //       '/signup': <SignUp navigateToSignIn={() => this.navigateTo('signin')} />,
  //       // 'forgot': <ForgotPassword navigateToSignIn={() => this.navigateTo('signin')} navigateToSignUp={() => this.navigateTo('signup')} />,
  //       '/': (
  //         <Fragment>
  //           <SideBar user={this.state.user} select={this.selectConversation} />
  //           <Main user={this.state.userInfo} conversationInfo={this.state.selectedConversation} />
  //         </Fragment>
  //       )
  //     }
  //     console.log(this.state)
  //     return (
  //       <div className="container row">
  //         {
  //           option[this.state.at]
  //         }
  //       </div>
  //     )
  //   }

  // }
}
export default App;
