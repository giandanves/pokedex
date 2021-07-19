import emptyIcon from "./img/empty-state-icon.svg";

const Empty = () => {
  return (
    <div className="mx-auto items-center min-h-full">
      <img src={emptyIcon} className="mx-auto" alt="Empty search" />
      <div className="py-6">
        <h2 className="text-base font-bold text-center">
          Your search returned 0 results
        </h2>
        <p className="py-2 text-center">
          Try to be less specific and try again
        </p>
      </div>
    </div>
  );
};

export default Empty;
