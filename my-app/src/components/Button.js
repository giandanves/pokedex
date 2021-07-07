const Button = (props) => {
  const { textColor, bg, type, onClick } = props;
  return (
    <button
      type={type}
      className={`text-${textColor} bg-${bg} font-bold text-sm py-3 px-4 rounded`}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
