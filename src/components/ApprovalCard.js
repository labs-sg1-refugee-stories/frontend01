import React from 'react';


const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">{props.message.title}</div>
                <div className="extra content">
                    <div className="ui two buttons">
                    <div className="ui basic green button" onClick = { () => {
                        props.approvalPending(props.message.id)
                    }}>Approve</div>

                    <div className="ui basic red button" onClick = { () => {
                        props.deleteMessage(props.message.id)
                    }}
                    >Reject</div>
                    </div>
                </div>
            
        </div>
    );

};




export default ApprovalCard;