import React from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../../../actions/chat_actions';

class MessageTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ''};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  updateHandler(fieldName) {
    return (e => this.setState({ [fieldName]: e.target.value }));
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.createMessage({
      body: this.state.body,
      chatId: this.props.currentChatId
    });
    this.setState({body: ''});
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          className="message-text-box"
          type="text"
          onChange={this.updateHandler('body')}
          placeholder="Type a message!"
          value={this.state.body}>
        </input>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      currentChatId: state.currentChatData.id,
    });
};

const mapDispatchToProps = (dispatch) => ({
  createMessage: (message) => dispatch(createMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageTextBox);
