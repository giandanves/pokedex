import next from "../img/next.svg";
import previous from "../img/previous.svg";
import Select from "./Select";

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
    <div className="flex w-full max-w-fullscreen mx-auto px-10 justify-between">
      <div className="flex">
        <Select
          options={[
            { value: 12, label: "12" },
            { value: 24, label: "24" },
            { value: 48, label: "48" },
            { value: 96, label: "96" },
          ]}
          selectFunction={handlePagination}
          loading={loading}
        />
        <p className="mx-2">per page</p>
      </div>
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
