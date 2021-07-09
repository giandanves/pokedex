import emptyIcon from "./img/empty-state-icon.svg";

const Empty = () => {
  return (
    <div>
      <img src={emptyIcon} alt="Empty search" />
      <div className="py-6">
        <h2 className="text-base font-bold">Your search returned 0 results</h2>
        <p>Try to be be less specific and try again</p>
      </div>
    </div>
  );
};

export default Empty;
