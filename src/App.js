import Comment from "./components/Comment/Comment";
import CommentInput from "./components/CommentInput/CommentInput";
import CommentReply from "./components//CommentReply/CommentReply";
import "./styles/global.css";

function App() {
  return (
    <div className="container">
      {/* map data and for each object, display a comment component */}
      <Comment />
      <CommentReply />
      <CommentInput />
    </div>
  );
}

export default App;
