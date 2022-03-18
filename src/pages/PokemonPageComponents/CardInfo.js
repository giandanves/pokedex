import classNames from "classnames";

const CardInfo = ({ title, value, addClass, textAlign }) => {
  return (
    <div
      className={classNames(
        "h-17 border border-black-100 rounded py-4 sm:p-4 mr-2 sm:mr-4",
        {
          [addClass]: addClass,
        }
      )}
    >
      <p
        className={classNames(
          "font-bold text-subtitle leading-subtitle text-black-500",
          { [textAlign]: textAlign }
        )}
      >
        {title}
      </p>
      <h3
        className={classNames(
          "font-black text-sm text-primary pt-1 whitespace-nowrap",
          { [textAlign]: textAlign }
        )}
      >
        {value}
      </h3>
    </div>
  );
};

export default CardInfo;
