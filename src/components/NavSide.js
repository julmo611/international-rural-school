import React from 'react'
import { NavLink } from 'react-router-dom'

function NavSide() {
  return (
    <div className="collection">
          <NavLink to='/dashboard/issue_hub' className="collection-item">
          <i className="tiny material-icons">report_problem</i>
          <span className="">Issues</span>
          </NavLink>
          <NavLink to='/dashboard/issue_add' className="collection-item">Add Issue</NavLink>
          <NavLink to='/dashboard/reporting' className="collection-item">Reporting</NavLink>
          <NavLink to='/dashboard/payment' className="collection-item">Payment</NavLink>
      </div>
  )
}

export default NavSide
