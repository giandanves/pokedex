import next from "./img/next.svg";
import previous from "./img/previous.svg";

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
    <div className="hidden sm:flex w-full justify-between pr-8">
      <select
        className="w-dropbox max-w-dropbox"
        disabled={loading}
        onChange={(e) => handlePagination(e)}
      >
        <option className="hover:bg-lightblue" value={12}>
          12
        </option>
        <option value={24}>24</option>
        <option value={48}>48</option>
        <option value={96}>96</option>
      </select>
      <div>
        <button
          disabled={offset / limit === 0 || loading}
          onClick={(e) => handleOffset(e, -1)}
        >
          <img src={previous} alt="previous page" className="h-4 mr-2" />
        </button>
        <button
          disabled={loading || limit + offset >= count}
          onClick={(e) => handleOffset(e, 1)}
        >
          <img src={next} alt="previous page" className="h-4" />
        </button>
      </div>
    </div>
  );
};
