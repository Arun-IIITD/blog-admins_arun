export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
  limit,
  setLimit
}) {
  return (
    <div 
    className="filter-bar"
    style={{
        display:"flex",
        gap:"12px",
        
    }}
    >

      <input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
 
      {/* <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="tech">Tech</option>
        <option value="ai">AI</option>
        <option value="design">Design</option>
      </select> */}

      <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={5}>5 / page</option>
        <option value={10}>10 / page</option>
      </select>

    </div>
  );
}
