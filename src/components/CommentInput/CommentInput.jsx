import React from "react";
import "./style.css";

import userIcon from "../../data.json";

const CommentInput = () => {
  const avatar = userIcon.currentUser.image.png;
  return (
    <div className="commentBox">
      <textarea
        type="text"
        className="inputBox"
        placeholder="Add a comment..."
      ></textarea>
      <img className="icon" src={avatar} />
      <button className="sendBtn">SEND</button>
    </div>
  );
};

export default CommentInput;
