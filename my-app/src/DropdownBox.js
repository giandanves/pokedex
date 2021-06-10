export const DropdownBox = (props) => {
  const { limit, setLimit, setOffset, setPage, loading } = props;
  let { page } = props;

  const handlePagination = (e) => {
    e.preventDefault();
    setLimit(e.target.value);
  };

  const handleOffset = (e, change) => {
    e.preventDefault();
    page = page + change;
    setPage(page);
    setOffset(page * limit);
  };
  return (
    <>
      <p>Show: </p>
      <select
        disabled={loading ? true : false}
        onChange={(e) => handlePagination(e)}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <button
        disabled={page === 0 || loading ? true : false}
        onClick={(e) => handleOffset(e, -1)}
      >
        previous page
      </button>
      <button
        disabled={loading ? true : false}
        onClick={(e) => handleOffset(e, 1)}
      >
        next page
      </button>
      <p>Page {page + 1}</p>
    </>
  );
};
