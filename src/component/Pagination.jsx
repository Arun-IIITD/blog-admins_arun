export default function Pagination({ total = 0, limit = 5, page, setPage }) {
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
     
      <button
       style={{background: "black", color : "black"}}
        className="nav-btn"
        disabled={page === 0}
        onClick={() => setPage(page - 1)}
      >
        +++
      </button>

     
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={`page-btn ${page === i ? "active" : ""}`}
          onClick={() => setPage(i)}
        >
          {i + 1}
        </button>
      ))}

     
      <button
      style={{
        color: "black",
        background: "black"
      }}
        className="nav-btn"
        disabled={page === totalPages - 1}
        onClick={() => setPage(page + 1)}
      >
        ▶
      </button>
    </div>
  );
}
