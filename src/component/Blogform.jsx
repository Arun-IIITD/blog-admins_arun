import { useState } from "react";

export default function BlogForm({ onSave }) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    author: "",
    status: "Draft",
  });

  const submit = () => {
    if (!form.title || !form.author) {
      alert("Title and Author required");
      return;
    }

    onSave({
      ...form,
      id: Date.now(),
      date: new Date().toISOString(),
    });

    setForm({ title: "", category: "", author: "", status: "Draft" });
  };

  return (
    <div className="form">
      <h3>Add Blog</h3>

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <input
        placeholder="Author"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option>Draft</option>
        <option>Published</option>
      </select>

      <button onClick={submit}>Save Blog</button>
    </div>
  );
}
