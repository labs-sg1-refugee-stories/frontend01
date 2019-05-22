import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import MessagesList from '../components/MessagesList';
import { fetchMessages } from '../actions/messagesActions';
import MessagesNew from './MessagesNew';
import MessageShow from './MessageShow';
import axios from 'axios';

class MessageBoardPage extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isPosting !== this.props.isPosting) {
            this.props.fetchMessages();
        }

        // re-fetch only after adding new message
        if (this.props.isPosting === true && nextProps.isPosting === false) {
            this.props.fetchMessages();
        }
      }
    

    render() {
        const { messages, match } = this.props;

        return (
            <div className="message-board-page">
                <Switch>
                    <Route exact path={`${match.url}/new`} component={MessagesNew} />
                    <Route path={`${match.url}/:messageId`} component={MessageShow}/>
                    <Route exact path={match.url} render={(props) => <MessagesList messages={messages} />} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages,
        isPosting: state.messages.isPosting
    };
}

const mapDispatchToProps = dispatch => {
    return {
      fetchMessages: () => dispatch(fetchMessages())
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(MessageBoardPage);