import React from "react";
import "./style.css";

import Comments from "../../data.json";

const Comment = () => {
  return (
    <>
      {Comments.comments.map((comment) => {
        return (
          <div className="comment" key={comment.id}>
            <div className="commentHeader">
              <img
                className="commentHeader__icon"
                src={comment.user.image.png}
                alt="usericon"
              />
              <div className="commentHeader__userName">
                {comment.user.username}
              </div>
              <div className="commentHeader__datePosted">2 days ago</div>
            </div>

            <div className="comment__content">{comment.content}</div>

            <div className="commentFooter">
              <div className="pointsGroup">
                <button className="increment">+</button>
                <button className="score">{comment.score}</button>
                <button className="decrement">-</button>
              </div>
              {/* ternary operator user===user > del/edit */}
              <div className="comment__replyBtn">
                <div className="replyIcon"></div>
                Reply
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comment;
