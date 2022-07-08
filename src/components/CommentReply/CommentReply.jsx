import React from "react";
import "./style.css";

import Replies from "../../data.json";

const CommentReply = () => {
  const userReply = Replies.comments[1].replies;
  console.log(userReply);

  return (
    <div className="replyContainer">
      {userReply.map((reply) => {
        return (
          <div className="reply" key={reply.id}>
            <div className="replyHeader">
              <img
                className="replyHeader__icon"
                src={reply.user.image.png}
                alt="usericon"
              />
              <div className="replyHeader__userName">{reply.user.username}</div>
              <div className="replyHeader__datePosted">{reply.createdAt}</div>
            </div>

            <div className="reply__content">{reply.content}</div>

            <div className="replyFooter">
              <div className="pointsGroup">
                <button className="increment">+</button>
                <button className="score">{reply.score}</button>
                <button className="decrement">-</button>
              </div>
              {/* ternary operator user===user > del/edit */}
              <div className="reply__replyBtn">
                <div className="replyIcon"></div>
                Reply
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentReply;
