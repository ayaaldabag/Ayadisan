import React, { useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const handlePost = () => {
    if (text.trim() !== "") {
      setPosts([{ id: Date.now(), text }, ...posts]);
      setText("");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", fontFamily: "Arial" }}>
      <h1>📢 موقعي الاجتماعي</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="اكتب منشورك..."
        style={{ width: "100%", height: "80px", padding: "10px" }}
      />

      <button
        onClick={handlePost}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        نشر
      </button>

      <div style={{ marginTop: "20px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              marginTop: "10px",
              background: "#f9f9f9"
            }}
          >
            {post.text}
          </div>
        ))}
      </div>
    </div>
  );
}
