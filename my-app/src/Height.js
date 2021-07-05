import { Field, useFormikContext } from "formik";
import checkedImg from "./img/checked.svg";
import classNames from "classnames";

export const Height = () => {
  const labels = ["Extra Small", "Small", "Medium", "Tall", "Extra Tall"];
  const { values } = useFormikContext();
  return (
    <div className="pt-9">
      <p className="pb-4 text-base font-bold text-black">Height</p>
      <div className="flex pb-6">
        {[1, 2, 3, 4, 5].map((vl) => (
          <label
            className={classNames(
              "flex py-1 px-1 sm:py-2 sm:px-3 mr-2 mb-2 text-black font-bold text-subtitle leading-subtitle sm:text-xs border border-black-300 rounded",
              {
                "bg-lightblue border-primary": values.height.includes(
                  vl.toString()
                ),
              }
            )}
          >
            <img
              src={checkedImg}
              alt="checked"
              className={classNames("opacity-0", {
                "opacity-100": values.height.includes(vl.toString()),
              })}
            />
            <Field
              type="checkbox"
              name="height"
              value={`${vl}`}
              key={vl}
              className="appearance-none"
            />
            {labels[vl - 1]}
          </label>
        ))}
      </div>
    </div>
  );
};
