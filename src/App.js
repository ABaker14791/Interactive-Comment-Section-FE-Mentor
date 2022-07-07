import Comment from "./components/Comment/Comment";
import CommentInput from "./components/CommentInput/CommentInput";
import "./styles/global.css";

function App() {
  return (
    <div className="container">
      {/* map data and for each object, display a comment component */}
      <Comment />
      <CommentInput />
    </div>
  );
}

export default App;
