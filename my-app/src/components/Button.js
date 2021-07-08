import classNames from "classnames";

const Button = (props) => {
  const { textColor, bg, type, onClick, addClass } = props;
  return (
    <button
      type={type}
      className={classNames(
        `text-${textColor} bg-${bg} font-bold text-sm py-3 px-4 rounded`,
        { [addClass]: addClass }
      )}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
