import Comment from "./components/Comment/Comment";
import CommentInput from "./components/CommentInput/CommentInput";
import CommentReply from "./components//CommentReply/CommentReply";
import "./styles/global.css";

import commentData from "./data.json";

function App() {
  const currentUser = commentData.currentUser.username;
  // const comments = commentData.comments;
  const userReply = commentData.comments[1].replies;

  return (
    <div className="container">
      {/* map data and for each object, display a comment component */}
      <Comment />
      <CommentReply user={currentUser} replies={userReply} />
      <CommentInput />
    </div>
  );
}

export default App;
