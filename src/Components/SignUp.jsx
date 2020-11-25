import React from 'react';
import '../assets/css/SignUp.css'
// import { signUp } from '../Controllers/TodoControllers'

export class SignUp extends React.Component {
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
        // signUp(this.state)
    }
    handleChange(e, type) {
        if (type === 'password') this.setState({ password: e.target.value })
        if (type === 'username') this.setState({ username: e.target.value })
        if (type === 'email') this.setState({ email: e.target.value })
        if (type === 'name') this.setState({ name: e.target.value })
        if (type === 'avatar') this.setState({ avatar: e.target.value })

    }
    render() {
        return (
            <form className="signup-area" onSubmit={this.handleSubmit}>
                <div className="signup-comp title">
                    <h1>Sign Up</h1>

                </div>
                <div className="signup-comp">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="username" onChange={(e) => this.handleChange(e, 'username')} placeholder="Enter username" required />
                </div>

                <div className="signup-comp">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="password" onInput={(e) => this.handleChange(e, 'password')} placeholder="Enter password" required />

                </div>
                <div className="signup-comp">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="email" onInput={(e) => this.handleChange(e, 'email')} placeholder="Enter email"required />

                </div>
                <div className="signup-comp">
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="name" onInput={(e) => this.handleChange(e, 'name')} placeholder="Enter name" required/>

                </div>
                <div className="signup-comp">
                    <label htmlFor="">Avatar</label>
                    <input type="text" name="" id="avatar" onInput={(e) => this.handleChange(e, 'avatar')} placeholder="Enter avatar links" required />

                </div>
                
                <div className="signup-comp opt">
                    <small onClick={this.props.navigateToSignIn}>
                        <a>Sign In</a>
                    </small>
                </div>
                <div className="signup-comp">
                    <input type="submit" value="Sign Up"  />

                </div>
            </form >
        )
    }

}