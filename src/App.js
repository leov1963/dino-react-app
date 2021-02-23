import './App.css';
import Comment from './Comment'

function App() {
  const post = {
    title: "Dinos are wicked cool yo",
    author: "Tha Best T-Rex",
    body: "Tis just a flesh wound",
    comments: ["Nice!", "Great post!", "Wow!"]
  }
  // map return an array
  const comments = post.comments.map((comment, index) => (<Comment text={comment} key={index}/>))

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      {/* <p>{post.comments[0]}</p> */}
      { comments }
    </div>
  );
}

export default App;
