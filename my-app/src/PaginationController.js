export const PaginationController = (props) => {
  const { limit, setLimit, setOffset, offset, loading, count } = props;

  const handlePagination = (e) => {
    setLimit(parseInt(e.target.value));
    setOffset(0);
  };

  const handleOffset = (e, change) => {
    e.preventDefault();
    let page = offset / limit;
    page = page + change;
    setOffset(page * limit);
  };

  return (
    <>
      <p>Show: </p>
      <select disabled={loading} onChange={(e) => handlePagination(e)}>
        <option value={12}>12</option>
        <option value={24}>24</option>
        <option value={48}>48</option>
        <option value={96}>96</option>
      </select>
      <button
        disabled={offset / limit === 0 || loading}
        onClick={(e) => handleOffset(e, -1)}
      >
        previous page
      </button>
      <button
        disabled={loading || limit + offset >= count}
        onClick={(e) => handleOffset(e, 1)}
      >
        next page
      </button>
      <p>Page {offset / limit + 1}</p>
    </>
  );
};
