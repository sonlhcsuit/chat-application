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
    this.state = {
      at: 'signin',
      selectedConversation:null
    }
  }
  // navigate to page
  navigateTo = (path) => {
    window.location.assign(`${path}`)
  }
  // using to load content of selected conversation
  // only save infomation about conversation
  selectConversation = (conversation) => {
    // console.log(conversation)
    // console.log(conversation)
    this.setState({ selectedConversation: conversation })
  }
  // Mounted, then navigate to home (if user has logged in) or sign in 
  componentDidMount() {
    let at = window.location.pathname.split('/')
    at.shift()
    if (localStorage.getItem('userId') !== null) {
      let userInfo = {
        userId: localStorage.getItem('userId'),
        avatar: localStorage.getItem('avatar'),
        name: localStorage.getItem('name')
      }
      this.setState({ at: 'home', userInfo: userInfo })
    } else {
      if (at[0] === 'home') {
        this.navigateTo('signin')
        at[0] = ''
      }
      this.setState({
        at: at[0] || 'signin'
      })
    }
  }
  render() {
    // routing 
    let option = {
      'signin': <SignIn navigateToHome={() => this.navigateTo('home')} navigateToForgotPassword={() => this.navigateTo('forgot')} navigateToSignUp={() => this.navigateTo('signup')} />,
      'signup': <SignUp navigateToSignIn={() => this.navigateTo('signin')} />,
      'forgot': <ForgotPassword navigateToSignIn={() => this.navigateTo('signin')} navigateToSignUp={() => this.navigateTo('signup')} />,
      'home': (
        <Fragment>
          <SideBar userInfo={this.state.userInfo} select={this.selectConversation}/>
          <Main userInfo={this.state.userInfo} conversationInfo={this.state.selectedConversation}/>
        </Fragment>
      )
    }

    return (
      <div className="container row">
        {option[this.state.at]}
      </div>
    )
  }
}
export default App;

// --------------------------------------------------//

// import { Component } from 'react'
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { time: 0 }
//   }
//   click = () => {
//     // this.setState({
//     //   time:this.state.time+1
//     // })
//     this.setState((old) => {
      
//       old.time += 1
//       console.log(old)
//       this.forceUpdate()
//     },()=>{
//       console.log('yeys')
//     })
//   }
//   render() {
//     console.log('render')
//     return (
//       <input onClick={this.click} value={`you clicked me ${this.state.time} times`} type="button" />
//     )
//   }
// }
// export default App