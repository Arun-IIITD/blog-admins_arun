export default function Sidebar({ active, setActive }) {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li
          className={active === "dashboard" ? "active" : ""}
          onClick={() => setActive("dashboard")}
        >
          Dashboard
        </li>

        <li
          className={active === "add" ? "active" : ""}
          onClick={() => setActive("add")}
        >
          Add Blog
        </li>
      </ul>
    </div>
  );
}
