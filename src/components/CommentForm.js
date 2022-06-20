import React from "react";
import CommentSection from "./CommentSection";
import "./CommentSection.css";

//Changed class and id names for labels and added for=""
//onChange needs to be added
class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      comment: "",
    };
  }

  updateUserName = (event) => {
    const { value } = event.target;
    this.setState({
      userName: value,
    });
  };

  updateComment = (event) => {
    const { value } = event.target;
    this.setState({
      comment: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addCommentToList(
      `${this.state.userName} says: ${this.state.comment}`
    );
  };
  //Changed value to this.state.userName
  render() {
    return (
      <div id="comment-form">
        <form onSubmit={this.handleFormSubmit}>
          <label for="input-box">
            Name
            <br></br>
            <input
              className="input-box"
              id="name"
              type="text"
              placeholder="Name..."
              onChange={this.updateUserName}
              // value={this.state.userName}
            ></input>
          </label>
          <br></br>
          <br></br>
          <label>
            Comment
            <br></br>
            <input
              className="input-box"
              id="comment"
              type="text"
              placeholder="..."
              onChange={this.updateComment}
              // value={this.state.comment}
            ></input>
          </label>
          <button type="submit">Post</button>
          {/* <input id="submit-comment-button"type="submit" value="Post">
          </input> */}
        </form>
      </div>
    );
  }
}

export default CommentForm;
