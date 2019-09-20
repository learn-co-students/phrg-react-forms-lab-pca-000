import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      remaining: this.props.maxChars
    };
  }

  handleChange = event => {
    let newRemaining = this.state.remaining - 1
    this.setState({
      message: event.target.value,
      remaining: newRemaining
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <p>{this.state.remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
