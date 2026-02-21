import { useBlogs } from "@/features/blog/hooks/useBlogs";
import type { Blog } from "../types/blog";
import BlogDetails from "@/features/blog/components/BlogDetails";

const Home = () => {
  const { data: blogs, isSuccess } = useBlogs();

  if (!isSuccess) {
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
