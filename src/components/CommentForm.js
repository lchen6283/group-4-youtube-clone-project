import React from "react";
import CommentSection from "./CommentSection";
import "./CommentSection.css";

//Changed class and id names for labels and added for=""
//onChange needs to be added
class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      commentValue: "",
      commentList: [],
      userName: "",
      comment: "",
    };
  }

  //Changed value to this.state.userName
  render() {
    return (
      <div id="comment-form">
        <label for="input-box">
          Name
          <br></br>
          <input
            className="input-box"
            id="name"
            type="text"
            placeholder="Name..."
            // value={this.state.userName}
            value={this.state.userName}
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
            value={this.state.comment}
          ></input>
        </label>
        <button onClick={this.handleFormSubmit}>Post</button>
        {/* <input id="submit-comment-button"type="submit" value="Post">
          </input> */}
      </div>
    );
  }
}

export default CommentForm;