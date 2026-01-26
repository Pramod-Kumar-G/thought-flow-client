import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/blog.api";
import type { Blog } from "../types/blog";

const Home = () => {
  const { data: blogs, isSuccess } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAll,
  });

  if (!isSuccess) {
    console.log("loading...");
    return <div>loading...</div>;
  }
  return (
    <div>
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
