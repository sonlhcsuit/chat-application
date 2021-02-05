import React from 'react';
import '../assets/css/SignUp.css'
import { signUpUltis } from '../ultis/userUltis'
import { Modal } from './Modal'

export class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            username: '',
            password: '',
            repassword: '',
            agree: true,
            notifMessage: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        try {
            this.validForm()
            signUpUltis(this.state)
                .then(id => {
                    console.log(id)
                    this.setState({notifMessage:'Sign up successful!'})

                })
                .catch(error => {
                    this.setState({notifMessage:error.message})

                })
        } catch (error) {
            console.log(error.message)

        }
    }
    validForm() {
        if (this.state.email.indexOf('@') === -1) throw new Error('Your email does not valid!')
        if (!/^[a-zA-Z0-9_]+$/gi.test(this.state.username)) throw new Error('Your username can only include letters, numbers and underscore (_)!')
        if (this.state.password === '') throw new Error('Your password must not be empty!')
        if (this.state.password.length <= 6) throw new Error('Your password must be longer than 6 characters!')
        if (this.state.password !== this.state.repassword) throw new Error('Your passwords do not match!')
        if (!this.state.agree) throw new Error('You must agree with terms and conditions!')
    }
    handleChange(e, type) {
        if (type === 'email') this.setState({ email: e.target.value })
        if (type === 'name') this.setState({ name: e.target.value })
        if (type === 'username') this.setState({ username: e.target.value })
        if (type === 'password') this.setState({ password: e.target.value })
        if (type === 'repassword') this.setState({ repassword: e.target.value })
        if (type === 'agree') this.setState({ agree: e.target.checked })
    }
    render() {
        const modal = this.state.notifMessage ?
            <Modal cancel={() => this.setState({ notifMessage: '' })}>
                <p>
                    {this.state.notifMessage}
                </p>

            </Modal> : null
        return (
            <>
                <form className="signup-cont" onKeyDown={(e) => e.key === 'Enter' ? this.handleSubmit() : null}>
                    <div className="signup-comp title">
                        <h1>Sign Up</h1>
                        <small>Create an account for free</small>
                    </div>
                    <div className="signup-comp">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="email" onInput={(e) => this.handleChange(e, 'email')} placeholder="Enter your email" required />
                    </div>
                    <div className="signup-comp">
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="name" onInput={(e) => this.handleChange(e, 'name')} placeholder="Enter your name" required />
                    </div>
                    <div className="signup-comp">
                        <label htmlFor="">Username</label>
                        <input type="text" name="" id="username" onChange={(e) => this.handleChange(e, 'username')} placeholder="Enter your username" required />
                    </div>
                    <div className="signup-comp">
                        <label htmlFor="">Password</label>
                        <input type="password" name="" id="password" onInput={(e) => this.handleChange(e, 'password')} placeholder="Enter your password" required />
                    </div>
                    <div className="signup-comp">
                        <label htmlFor="">Re-type password</label>
                        <input type="password" name="" id="avatar" onInput={(e) => this.handleChange(e, 'repassword')} placeholder="Re-type your password" required />
                    </div>
                    <div className="signup-comp opt ">
                        <div >
                            <input type="checkbox" checked={this.state.agree} onChange={(e) => this.handleChange(e, 'agree')} />
                            <label htmlFor="">I agree for the terms and conditions</label>
                        </div>
                        <a href="/signin">Sign In</a>
                    </div>
                    <div className="signup-comp">
                        <input type="button" value="Sign Up" onClick={this.handleSubmit} />
                    </div>
                </form >
                {
                    modal
                }
            </>
        )
    }

}