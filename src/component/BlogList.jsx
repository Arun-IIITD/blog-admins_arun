export default function BlogList({ blogs = [], onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Author</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {blogs.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              No blogs yet
            </td>
          </tr>
        ) : (
          blogs.map((b) => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.category}</td>
              <td>{b.author}</td>
              <td>{b.status}</td>
              <td>
                <button className="delete" onClick={() => onDelete(b.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
