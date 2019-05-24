import React, { Component } from 'react';
import { fetchMessagesPending , deleteMessagePending , approvalPending } from '../actions/messagesActions';
import { connect } from 'react-redux';
import ApprovalCard from '../components/ApprovalCard';

 class AdminContainer extends Component {

    componentDidMount() {
        this.props.fetchMessagesPending();
                
    }

    render() {
        return (
        <div> {this.props.messages && this.props.messages.map( (message, index) => {
                return <ApprovalCard  key={index} message={message}
                deleteMessage = {this.props.deleteMessagePending}
                approvalPending = {this.props.approvalPending}
                
                />
            })};
        </div>
        
        
        );
    }

}

const mapStateToProps = (state) => {
    return  {
        messages: state.messages.messagesPending
    }
}

export default connect(mapStateToProps, { fetchMessagesPending, deleteMessagePending , approvalPending })(AdminContainer);