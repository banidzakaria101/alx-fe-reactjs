import { useQuery, useQueryClient } from "@tanstack/react-query";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  const res = await fetch(POSTS_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }
  return res.json();
}

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isPending,
    isFetching,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    placeholderData: (prev) => prev,
  });

  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", padding: "1rem" }}>
      <h1 style={{ marginBottom: ".75rem" }}>Posts (React Query)</h1>

      <div style={{ display: "flex", gap: ".5rem", marginBottom: "1rem" }}>
        <button onClick={() => refetch()}>Refetch Now</button>
        <button onClick={() => queryClient.invalidateQueries({ queryKey: ["posts"] })}>
          Invalidate Cache
        </button>
        {isFetching && <span>⏳ Updating…</span>}
      </div>

      {isPending && <p>Loading posts…</p>}
      {isError && <p style={{ color: "crimson" }}>{error.message}</p>}

      {posts?.length ? (
        <ul style={{ display: "grid", gap: ".75rem" }}>
          {posts.slice(0, 15).map((p) => (
            <li key={p.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: ".75rem" }}>
              <h3 style={{ margin: 0 }}>{p.title}</h3>
              <p style={{ marginTop: ".5rem", opacity: 0.8 }}>{p.body}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
