import { Field, useFormikContext } from "formik";

export const Height = () => {
  const labels = ["Extra Small", "Small", "Medium", "Tall", "Extra Tall"];
  const { values } = useFormikContext();
  return (
    <div className="pt-9">
      <p className="pb-4 text-base font-bold text-black">Height</p>
      <div className="pb-6">
        {[1, 2, 3, 4, 5].map((vl) => (
          <label
            className={`bg-${
              values.height.includes(vl.toString()) && "lightblue"
            } label-for-check py-2 px-3 mr-2 text-black font-bold text-xs border border-black-300 rounded`}
          >
            <Field
              type="checkbox"
              name="height"
              value={`${vl}`}
              key={vl}
              className="hidden"
            />
            {labels[vl - 1]}
          </label>
        ))}
      </div>
    </div>
  );
};
