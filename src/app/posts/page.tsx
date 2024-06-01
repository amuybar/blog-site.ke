"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function PostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      setTitle("");
      setContent("");
      // Optionally redirect to the homepage or show a success message
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create a New Post</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.textarea}
          required
        />
        <button type="submit" className={styles.button}>
          Create Post
        </button>
      </form>
    </div>
  );
}
