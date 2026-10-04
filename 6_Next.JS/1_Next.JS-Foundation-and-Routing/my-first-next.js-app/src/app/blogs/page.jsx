import React from 'react';
import Post from '../components/Post';

// TODO: Fetch data from an API instead of using static data
const blogsData = [
  {
    id: 1,
    title: "What is React and Why Should You Learn It?",
    description:
      "Learn the basics of React, how it works, and why it is popular for building modern web applications.",
    author: "Md Bony Amin",
    category: "React",
    date: "2026-09-18",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 2,
    title: "Getting Started with Next.js",
    description:
      "A beginner-friendly guide to Next.js, its features, and how to create your first Next.js application.",
    author: "Md Bony Amin",
    category: "Next.js",
    date: "2026-09-17",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    id: 3,
    title: "Understanding JavaScript Fundamentals",
    description:
      "Explore variables, functions, arrays, objects, and other important JavaScript concepts for beginners.",
    author: "Md Bony Amin",
    category: "JavaScript",
    date: "2026-09-16",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
  },
  {
    id: 4,
    title: "How to Become a Better Software Engineer",
    description:
      "Discover practical tips for improving your coding skills, problem-solving ability, and software engineering knowledge.",
    author: "Md Bony Amin",
    category: "Software Engineering",
    date: "2026-09-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 5,
    title: "Why TypeScript is Important for Developers",
    description:
      "Understand how TypeScript improves JavaScript development with static typing, better tooling, and fewer errors.",
    author: "Md Bony Amin",
    category: "TypeScript",
    date: "2026-09-14",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  },
];


const BlogsPage = () => {
    return (
        <div>
            <h2>Our Blogs</h2>
            {
                blogsData.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default BlogsPage;