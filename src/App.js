import './App.css';

function App() {
  const post = {
    title: "Dinos are wicked cool yo",
    author: "Tha Best T-Rex",
    body: "Tis just a flesh wound",
    comments: ["Nice!", "Great post!", "Wow!"]
  }

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      <p>{post.comments[0]}</p>
      <p>{post.comments[1]}</p>
      <p>{post.comments[2]}</p>
    </div>
  );
}

export default App;
