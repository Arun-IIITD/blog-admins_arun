export default function Pagination({ total = 0, limit = 5, page, setPage }) {
  const pages = Math.ceil(total / limit);

  return (

    <div className="pagination">
      {Array.from({ length: pages }).map((_, i) => (
        <button
          key={i}
        className={page === i ? "active" : ""}
        

          onClick={() => setPage(i)}
          style={{ margin: 4, background: "white" }}
        >
          
        </button>
      ))}
    </div>
  );
}
