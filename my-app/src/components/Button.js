import classNames from "classnames";

const Button = (props) => {
  const { textColor, bg, type, onClick, addClass } = props;
  return (
    <button
      type={type}
      className={classNames(`bg-${bg} rounded`, { [addClass]: addClass })}
      onClick={onClick}
    >
      <p className={`text-${textColor} font-bold text-sm whitespace-nowrap`}>
        {props.children}
      </p>
    </button>
  );
};

export default Button;
