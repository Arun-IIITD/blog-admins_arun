import { useEffect, useState } from "react";
import BlogForm from "../component/Blogform";
import BlogList from "../component/BlogList";
import Pagination from "../component/Pagination";
import { getBlogs, saveBlogs } from "../utils/storage";

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => setBlogs(getBlogs()), []);

  const addBlog = (b) => {
    const updated = [...blogs, b];
    setBlogs(updated);
    saveBlogs(updated);
  };

  const del = (id) => {
    const updated = blogs.filter(b => b.id !== id);
    setBlogs(updated);
    saveBlogs(updated);
  };

  const view = blogs.slice(page * 5, page * 5 + 5);

  return (
    <div className="container">
      <BlogForm onSave={addBlog} />
      <BlogList blogs={view} onDelete={del} />
      <Pagination page={page} total={blogs.length} setPage={setPage} />
    </div>
  );
}
