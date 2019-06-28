import React from 'react'
import IssueLog from './IssueSummary';

export default function IssueLogs() {
    return (
        <div className="row">
            <div className="col s4">
                <IssueLog />
            </div>
            <div className='col' ></div>
            <div className="col s4">
                <IssueLog />
            </div>
            <div className='col' ></div>
            <div className="col s4">
                <IssueLog />
             </div>
        </div>
    )
}
