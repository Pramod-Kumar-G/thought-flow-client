import { useState } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateBlog } from "../hooks/useCreateBlogs";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { mutate, isPending } = useCreateBlog();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    mutate({ title, content });
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
        <Button type="submit" disabled={isPending}>
          {isPending ? "Adding..." : "Add blog"}
        </Button>
      </form>
    </div>
  );
};

export default AddBlog;
