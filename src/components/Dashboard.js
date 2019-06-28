
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavSide from './NavSide'
import IssueHub from './IssueHub'
import IssueAdd from '../forms/IssueAdd'
import IssueDetail from './IssueDetail'
import Payment from '../forms/Payment'

class Dashboard extends Component {
    render() {
        return (
            <div className="row" >
                <div className="col 3">
                    <NavSide />
                </div>
                <div className="col 9">
                    <Route path='/dashboard/issue_hub' component={IssueHub} />
                    <Route path='/dashboard/issue_add' component={IssueAdd} />
                    <Route path='/dashboard/issues/:id' component={IssueDetail} />
                    <Route path='/dashboard/payment' component={Payment} />
                </div>
            </div>
        );
    }
}

export default Dashboard;