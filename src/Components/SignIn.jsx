
import React from 'react';
import '../assets/css/SignIn.css'
import { signIn } from '../Controllers/Controllers'

export class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        signIn(this.state.username, this.state.password)
            .then((userInfo) => {
                localStorage.setItem('userId', userInfo.id)
                localStorage.setItem('avatar', userInfo.avatar)
                localStorage.setItem('name', userInfo.name)
                this.props.navigateToHome()
            })
            .catch(err => {
                console.error(err)
            })
    }
    handleChange(e, type) {
        if (type === 'password') this.setState({ password: e.target.value })
        if (type === 'username') this.setState({ username: e.target.value })
    }
    render() {
        return (
            <form className="signin-area">
                <div className="signin-comp title">
                    <h1>Sign In</h1>
                </div>
                <div className="signin-comp">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="username" onChange={(e) => this.handleChange(e, 'username')} placeholder="Enter username" />
                </div>

                <div className="signin-comp">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="password" onInput={(e) => this.handleChange(e, 'password')} placeholder="Enter password" />

                </div>
                <div className="signin-comp opt">
                    <small>
                        <a onClick={this.props.navigateToForgotPassword}>Forgot Password?</a>
                    </small>
                    <small onClick={this.props.navigateToSignUp}>
                        <a>Sign Up</a>
                    </small>
                </div>
                <div className="signin-comp">
                    <input type="button" value="Sign In" onClick={this.handleSubmit} />

                </div>
            </form >
        )
    }

}