import { useQuery } from "@tanstack/react-query";
import { getAll, type Blog } from "./api/blogs";

const App = () => {
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
      <div className="text-3xl text-amber-500">ThoughFlow</div>
      <div>
        Title: <input type="text" className="bg-blue-400" />
        Content: <input type="text" className="bg-blue-400" />
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

export default App;
