import React from 'react';
import '../assets/css/ForgotPassword.css'
// import { login } from '../Controllers/TodoControllers'

export class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        // login(this.state.username, this.state.password)
        console.log('forgot')
    }
    handleChange(e, type) {
        if (type === 'email') this.setState({ email: e.target.value })
    }
    render() {
        return (
            <form className="forgot-password-area ">
                <div className="forgot-password-comp title">
                    <h1>Forgot Password</h1>

                </div>
                <div className="forgot-password-comp">
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="username" onChange={(e) => this.handleChange(e, 'username')} placeholder="Enter username" />
                </div>
                <div className="forgot-password-comp opt">
                    <small onClick={this.props.navigateToSignUp}>
                        <a>Sign Up</a>
                    </small>
                    <small onClick={this.props.navigateToSignIn}>
                        <a>Sign In</a>
                    </small>
                </div>
                <div className="forgot-password-comp">
                    <input type="button" value="Send Email" onClick={this.handleSubmit} />

                </div>
            </form >
        )
    }

}