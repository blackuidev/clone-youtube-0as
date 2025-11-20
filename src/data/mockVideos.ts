import { v4 as uuidv4 } from 'uuid';

export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelName: string;
  channelAvatarUrl: string;
  views: string;
  uploadDate: string;
  duration: string;
  videoUrl: string;
  description: string;
  category: string;
}

const mockVideos: Video[] = [
  {
    id: uuidv4(),
    title: "Building a YouTube Clone with React & Lightswind UI",
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-N37u1Jj-Q27Yy-wQ2-4R7k8y4g",
    channelName: "Lightswind Dev",
    channelAvatarUrl: "https://yt3.ggpht.com/ytc/AIdro_k6s_y8q-k1q-w2w2y3y4y5y6y7y8y9y0y1y2=s68-c-k-c0x00ffffff-no-rj",
    views: "1.2M views",
    uploadDate: "1 month ago",
    duration: "15:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A comprehensive tutorial on building a YouTube clone using React, TypeScript, and the Lightswind UI library. Learn about component architecture, state management, and routing.",
    category: "Tutorials",
  },
  {
    id: uuidv4(),
    title: "Top 10 AI Tools for Web Developers in 2024",
    thumbnailUrl: "https://i.ytimg.com/vi/G_y6oR1c30Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-N37u1Jj-Q27Yy-wQ2-4R7k8y4g",
    channelName: "Tech Insights",
    channelAvatarUrl: "https://yt3.ggpht.com/ytc/AIdro_k6s_y8q-k1q-w2w2y3y4y5y6y7y8y9y0y1y2=s68-c-k-c0x00ffffff-no-rj",
    views: "890K views",
    uploadDate: "3 weeks ago",
    duration: "12:10",
    videoUrl: "https://www.youtube.com/embed/G_y6oR1c30Q",
    description: "Explore the latest and greatest AI tools that are revolutionizing web development workflows, from code generation to automated testing.",
    category: "Technology",
  },
  {
    id: uuidv4(),
    title: "Mastering TypeScript: Advanced Concepts",
    thumbnailUrl: "https://i.ytimg.com/vi/BwuY_e1rFzE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-N37u1Jj-Q27Yy-wQ2-4R7k8y4g",
    channelName: "Code Academy",
    channelAvatarUrl: "https://yt3.ggpht.com/ytc/AIdro_k6s_y8q-k1q-w2w2y3y4y5y6y7y8y9y0y1y2=s68-c-k-c0x00ffffff-no-rj",
    views: "550K views",
    uploadDate: "2 months ago",
    duration: "25:00",
    videoUrl: "https://www.youtube.com/embed/BwuY_e1rFzE",
    description: "Dive deep into advanced TypeScript concepts like conditional types, mapped types, and decorators to write more robust and scalable code.",
    category: "Programming",
  },
  {
    id: uuidv4(),
    title: "React Hooks Explained: A Deep Dive",
    thumbnailUrl: "https://i.ytimg.com/vi/dpw9EHDh2bM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-N37u1Jj-Q27Yy-wQ2-4R7k8y4g",
    channelName: "Frontend Journey",
    channelAvatarUrl: "https://yt3.ggpht.com/ytc/AIdro_k6s_y8q-k1q-w2w2y3y4y5y6y7y8y9y0y1y2=s68-c-k-c0x00ffffff-no-rj",
    views: "1.1M views",
    uploadDate: "4 months ago",
    duration: "18:45",
    videoUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
    description: "Understand the core principles and practical applications of React Hooks, including useState, useEffect, useContext, and custom hooks.",
    category: "Frontend",
  },
  {
    id: uuidv4(),
    title: "Understanding CSS Grid Layout in 15 Minutes",
    thumbnailUrl: "https://i.ytimg.com/vi/BfJ9tPF_y6Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-N37u1Jj-Q27Yy-wQ2-4R7k8y4g",
    channelName: "Web Dev Simplified",
    channelAvatarUrl: "https://yt3.ggpht.com/ytc/AIdro_k6s_y8q-k1q-w2w2y3y4y5y6y7y8y9y0y1y2=s68-c-k-c0x00ffffff-no-rj",
    views: "2.5M views",
    uploadDate: "1 year ago",
    duration: "15:00",
    videoUrl: "https://www.youtube.com/embed/BfJ9tPF_y6Q",
    description: "A quick and practical guide to mastering CSS Grid for creating powerful and flexible layouts in your web projects.",
    category: "CSS",
  },
  {
    id: uuidv4(),
    title: "Full-Stack Development with Next.js and Supabase",
    thumbnailUrl: "https://i.ytimg.com/vi/0p_b7k00P0c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-N37u1Jj-Q27Yy-wQ2-4R7k8y4g",
    channelName: "Dev Master",
    channelAvatarUrl: "https://yt3.ggpht.com/ytc/AIdro_k6s_y8q-k1q-w2w2y3y4y5y6y7y8y9y0y1y2=s68-c-k-c0x00ffffff-no-rj",
    views: "780K views",
    uploadDate: "6 months ago",
    duration: "35:20",
    videoUrl: "https://www.youtube.com/embed/0p_b7k00P0c",
    description: "Build a complete full-stack application using the powerful combination of Next.js for the frontend and Supabase for the backend.",
    category: "Fullstack",
  },
  {
    id: uuidv4(),
    title: "Advanced JavaScript Patterns You Should Know",
    thumbnailUrl: "https://i.ytimg.com/vi/BMiPq_FjG7E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-N37u1Jj-Q27Yy-wQ2-4R7k8y4g",
    channelName: "JavaScript Pro",
    channelAvatarUrl: "https://yt3.ggpht.com/ytc/AIdro_k6s_y8q-k1q-w2w2y3y4y5y6y7y8y9y0y1y2=s68-c-k-c0x00ffffff-no-rj",
    views: "620K views",
    uploadDate: "8 months ago",
    duration: "20:00",
    videoUrl: "https://www.youtube.com/embed/BMiPq_FjG7E",
    description: "Discover essential advanced JavaScript design patterns that will make your code more organized, maintainable, and efficient.",
    category: "JavaScript",
  },
  {
    id: uuidv4(),
    title: "CSS Animations and Transitions for Modern Web Design",
    thumbnailUrl: "https://i.ytimg.com/vi/Y_dJ9Ld0iFw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-N37u1Jj-Q27Yy-wQ2-4R7k8y4g",
    channelName: "Design Code",
    channelAvatarUrl: "https://yt3.ggpht.com/ytc/AIdro_k6s_y8q-k1q-w2w2y3y4y5y6y7y8y9y0y1y2=s68-c-k-c0x00ffffff-no-rj",
    views: "950K views",
    uploadDate: "5 months ago",
    duration: "14:00",
    videoUrl: "https://www.youtube.com/embed/Y_dJ9Ld0iFw",
    description: "Learn how to create smooth and engaging animations and transitions using only CSS to enhance your website's user experience.",
    category: "CSS",
  },
];

export default mockVideos;
