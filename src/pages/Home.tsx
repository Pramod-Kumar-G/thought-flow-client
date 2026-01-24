import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/blog.api";
import type { Blog } from "../types/blog";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { data: blogs, isSuccess } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAll,
  });

  if (!isSuccess) {
    console.log("loading...");
    return <div>loading...</div>;
  }
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:3000/api/blogs",
      {
        title,
        content,
      },
      { withCredentials: true },
    );
    console.log(res.data);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          Title:{" "}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-blue-400"
          />
          Content:{" "}
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-blue-400"
          />
          <button type="submit">add blog</button>
        </form>
      </div>
      {blogs.map((blog: Blog) => (
        <div key={blog.id}>
          {blog.title}
          {blog.content}
        </div>
      ))}
    </div>
  );
};

export default Home;
