import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signup } from '../actions';

class SignUp extends Component {
    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: ''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSelect = e => {
        console.log(e.target.value);
        this.setState({
            authLevel: e.target.value
        }
        )
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.authLevel !== ''){
        this.props.signup(this.state)
        this.props.history.push("/signin")  
        } else {
            alert("Please select your role")
        }
    }
    
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Signup</h5>
                    <div className="input-field">
                        <label htmlFor="user">Username</label>
                        <input type="text" id='user' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' onChange={this.handleChange} />
                    </div>
                    <div>
                    <label htmlFor="admin">
                        <p>Are you a School Admin or a Board Member?</p>
                        <input 
                            checked 
                            type="radio" 
                            name="authLevel" 
                            id="admin" 
                            onChange={this.handleSelect} 
                            value={this.state.authLevel}
                        />
                        <span>Admin</span>
                    </label>
                    </div>
                    <div>
                    <label htmlFor="boardMember" >
                        <input 
                            checked 
                            type="radio" 
                            name="authLevel" 
                            id="boardMember" 
                            onChange={this.handleSelect} 
                            value={this.state.authLevel}
                        />
                        <span>Board Member</span>
                    </label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}



export default connect(
    null,
    { signup }
)(SignUp)