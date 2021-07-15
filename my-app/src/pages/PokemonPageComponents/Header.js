import numberToThreeDigits from "../../numberToThreeDigits";

const Header = ({ name, id }) => {
  return (
    <div>
      <h1 className="capitalize font-bold text-black text-2xl">{name}</h1>
      <p className="text-black-500 font-bold text-sm">
        {"#" + numberToThreeDigits(id)}
      </p>
    </div>
  );
};

export default Header;
