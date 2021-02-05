import React from 'react';
import '../assets/css/SignIn.css'
import { Modal } from './Modal'
import { signInUltis } from '../ultis/userUltis'
import { PathContext } from "../Context/PathContext";
export class SignIn extends React.Component {
    static contextType = UserContext
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
                    // window.history.pushState(null,null,'/')
                    window.location.assign('/')
                }
            }}>
                <p>
                    {this.state.notifMessage}
                </p>
            </Modal> : null
        return (
            <UserContext.Consumer>
                {
                    (context) => {
                        console.log(context)
                        return (
                            <>
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
                                        <a href="/signup" >Sign Up</a>
                                    </div>
                                    <div className="signin-comp">
                                        <input type="button" value="Sign In" onClick={this.handleSubmit} />
                                    </div>
                                </form >
                                {

                                    modal
                                }
                            </>
                        )
                    }
                }

            </UserContext.Consumer>
        )

    }

}