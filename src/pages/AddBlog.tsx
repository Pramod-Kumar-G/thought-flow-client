import { useState } from "react";
import axios from "axios";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
    <div className="max-w-md">
      <form onSubmit={handleSubmit}>
        <Field>
          <FieldLabel htmlFor="title">Title</FieldLabel>
          <Input
            id="title"
            type="text"
            placeholder="Is Rust worth Learning?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="content">Content</FieldLabel>
          <Input
            id="content"
            type="text"
            placeholder="Yeah buddy light weight Light weight baby. Yeah buddy"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Field>
        <Button type="submit">Add blog</Button>
      </form>
    </div>
  );
};

export default AddBlog;
