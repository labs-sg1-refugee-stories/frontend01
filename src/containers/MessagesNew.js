import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/messagesActions';

class MessagesNew extends Component {

  constructor() {
    super();

    this.state = {
      storytext: '', 
      name: '',
      country: '',
      title:''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addMessage(this.state);
    this.props.history.push('/messages');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render(){
    
    return (
      <div className="single-message-page">
        <div className="message-card message-card-fullpage">
          <form onSubmit={this.handleOnSubmit} className="new-message">
            <input 
              type="text" 
              className="new-sender"
              name="name"
              onChange={this.handleOnChange} 
              placeholder="Sender Name" />
              <input 
              type="text"
              className="new-sender"
              name="country"
              onChange={this.handleOnChange} 
              placeholder="country" />
            <input 
              type="text"
              className="new-recipient"
              name="title"
              onChange={this.handleOnChange} 
              placeholder="Title" />
            <input 
              type="textarea"
              rows={4}
              cols={40}
              className="new-content"
              name="storytext"
              onChange={this.handleOnChange} 
              placeholder="Message" />
            <input 
              type="submit" 
              value="Add Message" 
              className="new-message-button"
              onChange={this.handleOnChange} 
              disabled={!this.state.storytext}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addMessage })(MessagesNew)