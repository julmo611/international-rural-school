import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function NavTop(props) {
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <NavLink to='/' className="brand-logo left">IRSR</NavLink>
          
          {props.token ? 
          (
            <div>
              <ul className="right">
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
              </ul>
            </div>
          ) : (
                <div>
                  <ul className="right">
                    <li><NavLink to='/signup'>Sign Up</NavLink></li>
                    <li><NavLink to='/signin'>Sign In</NavLink></li>
                  </ul>
                </div>
              )
          }
   
        </div>
      </nav>
    </div>
  )
}

const mstp = state => {
  return ({
    token: state.token
  })
}

export default connect(
  mstp,
)(NavTop)
