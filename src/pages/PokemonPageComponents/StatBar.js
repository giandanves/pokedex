import getStatPercentage from "../getStatPercentage";

const StatBar = ({ title, stat }) => {
  return (
    <>
      <p className="text-dark text-xs font-bold pb-1">{title}</p>
      <div className="h-2 bg-black-50 w-full rounded mb-4">
        <div
          className="h-2 bg-primary rounded"
          style={{ width: getStatPercentage(stat) }}
        ></div>
      </div>
    </>
  );
};

export default StatBar;
