import classNames from "classnames";

const CardInfo = ({ title, value, addClass, textAlign }) => {
  return (
    <div
      className={classNames(
        "h-[68px] w-[84px] border border-black-100 rounded p-4 mr-4",
        { [addClass]: addClass }
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
