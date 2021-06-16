export const PaginationController = (props) => {
  const { limit, setLimit, setOffset, offset, loading, count } = props;

  const handlePagination = (e) => {
    setLimit(e.target.value);
    setOffset(0);
  };

  const handleOffset = (e, change) => {
    e.preventDefault();
    let page = offset / limit;
    page = page + change;
    setOffset(page * limit);
  };

  const checkCount = () => {
    let page = offset / limit + 1;
    if (limit * page >= count) {
      return true;
    }
    return false;
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
        disabled={offset / limit === 0 || loading ? true : false}
        onClick={(e) => handleOffset(e, -1)}
      >
        previous page
      </button>
      <button
        disabled={loading || checkCount() ? true : false}
        onClick={(e) => handleOffset(e, 1)}
      >
        next page
      </button>
      <p>Page {offset / limit + 1}</p>
    </>
  );
};
