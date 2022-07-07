import React from "react";
import "./style.css";

const CommentInput = () => {
  return (
    <div className="commentBox">
      <textarea
        type="text"
        className="inputBox"
        placeholder="Add a comment..."
      ></textarea>
      <div className="commentBox__flex">
        <div className="icon"></div>
        <button className="sendBtn">SEND</button>
      </div>
    </div>
  );
};

export default CommentInput;
