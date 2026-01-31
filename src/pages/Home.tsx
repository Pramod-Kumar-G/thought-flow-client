import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/blog.api";
import type { Blog } from "../types/blog";
import BlogDetails from "@/components/BlogDetails";

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
      <div className="grid grid-cols-3 gap-6 p-6">
        {blogs.map((blog: Blog) => (
          <BlogDetails key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
