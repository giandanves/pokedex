export const DropdownBox = (props) => {
  const { setLimit } = props;

  const handlePagination = (e) => {
    e.preventDefault();
    setLimit(e.target.value);
  };
  return (
    <>
      <p>Show: </p>
      <select onChange={(e) => handlePagination(e)}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </>
  );
};
