// import React, { Component } from 'react'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { signin } from "../actions";
// import axios from 'axios';

// class SignIn extends Component {
//     state = {
//         username: '',
//         password: ''
//     }

//     handleChange = e => {
//         this.setState({
//             ...this.state,
//             [e.target.name]: e.target.value
//         });
//     };

//     handleSignin = e => {
//         e.preventDefault();
//         axios
//             .post(
//                 'https://ruralschoolapp.herokuapp.com/oauth/token', 
//                 `grant_type=password&username=${this.state.username}&password=${this.state.password}`,
//                 {
//                     headers: {
//                         Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
//                         'content-Type': 'application/x-www-form-urlencoded'
//                     }
//                 }
//             )

//             .then(res => {
//                 localStorage.setItem('token', res.data.access_token);
//                 this.props.history.push('/users');
//             })

//             .catch(err => console.dir(err));
//     };
import React from 'react';
import { signin } from '../actions/index'
import { connect } from 'react-redux'
const axios = require('axios');
// const oauth = require('axios-oauth-client');



class SignIn extends React.Component {
    
    state = {
        username: '',
        password: ''
    }
    
    handleChange = e => {
    this.setState(
        {
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        axios
            .post('https://ruralschoolapp.herokuapp.com/oauth/token', 
            `grant_type=password&username=${this.state.username}&password=${this.state.password}`, 
            {
                headers: {
                    Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(res => {
                this.props.signin(res.data.access_token);
                localStorage.setItem('token', res.data.access_token);
                this.props.history.push('/dashboard');

            })
            .catch(err => console.dir(err));
        e.preventDefault();
    }
    // render() {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <input 
    //                 type="text" 
    //                 name="username" 
    //                 value={this.state.username} 
    //                 onChange={this.handleChange} 
    //                 required 
    //             />
    //             <input 
    //                 type="password" 
    //                 name="password" 
    //                 value={this.state.password} 
    //                 onChange={this.handleChange} 
    //                 required 
    //             />
    //             <button>Submit</button>
    //         </form>
    //     );

    // }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="user">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                            required 
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            required 
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0 ">sign in</button>
                    </div>
                </form>
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ signin }, dispatch);
//   }
  


  export default connect(
    null,
    { signin }
  )(SignIn);
