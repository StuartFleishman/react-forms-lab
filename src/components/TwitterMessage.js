import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

 

  render() {
    const charLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong><span>{charLeft}</span>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" value={this.state.message} id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
