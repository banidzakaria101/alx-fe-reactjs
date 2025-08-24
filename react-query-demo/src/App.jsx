import { useState } from "react";
import PostsComponent from "./components/PostsComponent.jsx";

function About() {
  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", padding: "1rem" }}>
      <h1>About</h1>
      <p>Navigate back to “Posts” to see cached data load instantly (within staleTime).</p>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("posts");

  return (
    <div>
      <nav style={{ display: "flex", gap: ".5rem", padding: "1rem", borderBottom: "1px solid #eee" }}>
        <button onClick={() => setPage("posts")}>Posts</button>
        <button onClick={() => setPage("about")}>About</button>
      </nav>

      {page === "posts" ? <PostsComponent /> : <About />}
    </div>
  );
}
