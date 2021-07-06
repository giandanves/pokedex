import { Field } from "formik";
import classNames from "classnames";
import checkedImg from "./img/checked.svg";

const Checkbox = (props) => {
  const { label, name, value, values } = props;

  const isChecked = values.includes(value.toString());

  return (
    <label
      className={classNames(
        "flex whitespace-nowrap capitalize h-6 py-1 px-2 mr-2 mb-2  text-black font-bold text-subtitle leading-subtitle border border-black-300 rounded",
        {
          "bg-lightblue border-primary": isChecked,
        }
      )}
    >
      <img
        src={checkedImg}
        alt="checked"
        className={classNames("opacity-0", {
          "opacity-100": isChecked,
        })}
      />
      <Field
        type="checkbox"
        name={name}
        key={label}
        className="appearance-none"
        value={value}
      />
      {label}
    </label>
  );
};

export default Checkbox;
