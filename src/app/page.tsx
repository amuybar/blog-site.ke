"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

interface Post {
  _id: string;
  title: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div className={styles.page}>
      {/* Navigation Bar */}
      <nav className={styles.nav}>
        <div className={styles.logo}>My Blog</div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to My Blog</h1>
          <p>Discover amazing content, tutorials, and insights!</p>
          <div className={styles.heroButtons}>
            <Link href="/posts" className={styles.heroButton}>
              Create Post
            </Link>
            <Link href="/subscribe" className={styles.heroButtonAlt}>
              Subscribe Now
            </Link>
          </div>
        </div>
      </header>

      {/* Blog Posts Section */}
      <section className={styles.postsSection}>
        <h2 className={styles.sectionTitle}>Latest Blog Posts</h2>
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <div key={post._id} className={styles.postCard}>
              <Link href={`/posts/${post._id}`}>
                <h3 className={styles.postTitle}>{post.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.newsletter}>
            <h3>Subscribe to our Newsletter</h3>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className={styles.footerLinks}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.footerCopy}>
          © 2024 My Blog. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
