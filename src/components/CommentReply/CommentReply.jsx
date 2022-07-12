import { useState } from "react";
import "./style.css";

const CommentReply = ({ user, replies }) => {
  console.log(user);
  const [votes, setVotes] = useState(0);

  return (
    <div className="replyContainer">
      {replies.map((reply) => {
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

            <div className="reply__content">
              <span className="replyTag">@{reply.replyingTo}</span>
              {reply.content}
            </div>

            <div className="replyFooter">
              <div className="pointsGroup">
                <button
                  className="increment"
                  onClick={() => setVotes(votes + 1)}
                >
                  +
                </button>
                <button className="score">{votes}</button>
                <button
                  className="decrement"
                  onClick={() => setVotes(votes - 1)}
                >
                  -
                </button>
              </div>
              {user === reply.user.username ? (
                <div class="reply__editBtnContainer">
                  <div className="reply__deleteBtn">
                    <div class="deleteIcon"></div>
                    <div class="deleteText">Delete</div>
                  </div>
                  <div className="reply__editBtn">
                    <div class="editIcon"></div>Edit
                  </div>
                </div>
              ) : (
                <div className="reply__replyBtn">
                  <div className="replyIcon"></div>
                  Reply
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentReply;
