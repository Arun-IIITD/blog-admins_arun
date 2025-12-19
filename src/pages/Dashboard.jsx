import { useEffect, useState,useMemo } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import BlogForm from "../component/Blogform";
import BlogList from "../component/BlogList";
import Pagination from "../component/Pagination";
import { getBlogs, saveBlogs } from "../utils/storage";
import SearchFilter from "../component/SearchFilter"

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [active, setActive] = useState("dashboard");
  const [search,setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState(5);

//   const start = page * limit;
// const end = start + limit;
// const visibleBlogs = blogs.slice(start, end);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  useEffect(() => {
    setPage(0)
  },[search,category,limit])

  const addBlog = (blog) => {
    const updated = [...blogs, blog];
    setBlogs(updated);
    saveBlogs(updated);
    setActive("dashboard"); 
  };

  const del = (id) => {
    const updated = blogs.filter((b) => b.id !== id);
    setBlogs(updated);
    saveBlogs(updated);
  };

  const view = blogs.slice(page * 5, page * 5 + 5);

   const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchSearch = blog.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category
        ? blog.category === category
        : true;

      return matchSearch && matchCategory;
    });
  }, [blogs, search, category]);

  const start = page * limit;
  const paginatedBlogs = filteredBlogs.slice(start, start + limit);

  return (
    <div className="app-layout">
      <Sidebar active={active} setActive={setActive} />

      <div className="main">
        <Navbar />



        <div className="content">
          {active === "add" && <BlogForm onSave={addBlog} />}

          {active === "dashboard" && (
            <>

             <SearchFilter
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              limit={limit}
              setLimit={setLimit}
            />


              <BlogList 
              blogs={paginatedBlogs} 
              onDelete={del} 
              />
              <Pagination
                total={filteredBlogs.length}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
