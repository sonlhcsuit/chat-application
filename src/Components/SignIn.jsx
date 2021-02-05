import { Fragment, Component } from 'react';
import '../assets/css/SignIn.css'
import { Modal } from './Modal'
import { signInUltis } from '../ultis/userUltis'
import {Link} from './Link'
export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            notifMessage: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit() {
        signInUltis(this.state)
            .then(val => {
                this.setState({ user: val })
                this.setState({ notifMessage: 'Sign In success' })
            })
            .catch(er => {
                this.setState({ notifMessage: er.message })
            })
    }
    handleChange(e, type) {
        if (type === 'password') this.setState({ password: e.target.value })
        if (type === 'username') this.setState({ username: e.target.value })
    }
    render() {
        const modal = this.state.notifMessage ?
            <Modal cancel={() => {
                this.setState({ notifMessage: '' })
                if (this.state.notifMessage === 'Sign In success') {
                    localStorage.setItem('user', JSON.stringify(this.state.user))
                    // to navigate to home page & trigge popstate event - for render
                    window.history.pushState(null,null,'/')
                    window.dispatchEvent(new PopStateEvent('popstate'))
                }
            }}>
                <p>
                    {this.state.notifMessage}
                </p>
            </Modal> : null
        return (
            <Fragment>
                <form className="signin-cont" onKeyDown={(e) => e.key === 'Enter' ? this.handleSubmit() : null}>
                    <div className="signin-comp title">
                        <h1>Sign In</h1>
                        <small>Please sign in for better experience</small>
                    </div>
                    <div className="signin-comp">
                        <label htmlFor="">Username</label>
                        <input type="text" name="" id="username" onChange={(e) => this.handleChange(e, 'username')} placeholder="Enter your username or email" />
                    </div>
                    <div className="signin-comp">
                        <label htmlFor="">Password</label>
                        <input type="password" name="" id="password" onInput={(e) => this.handleChange(e, 'password')} placeholder="Enter your password" />
                    </div>
                    <div className="signin-comp opt ">
                        {/* <a href="/forgot" >Forgot Password?</a> */}
                        <Link path="/signup">
                            <p>Sign Up</p>
                        </Link>
                    </div>
                    <div className="signin-comp">
                        <input type="button" value="Sign In" onClick={this.handleSubmit} />
                    </div>
                </form >
                {
                    modal
                }
            </Fragment >


        )

    }

}
// export default 