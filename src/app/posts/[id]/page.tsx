"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import styles from "./page.module.css";

interface Post {
  _id: string;
  title: string;
  content: string;
}

export default function DetailPage() {
  const [post, setPost] = useState<Post | null>(null);
  const params = useParams(); 
  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const res = await fetch(`/api/posts/${id}`);
        const data = await res.json();
        setPost(data);
      };

      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
    </div>
  );
}
