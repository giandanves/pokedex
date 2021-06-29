import { Field, useFormikContext } from "formik";

export const Weight = () => {
  const labels = ["Extra Light", "Light", "Medium", "Large", "Extra Large"];
  const { values } = useFormikContext();
  return (
    <div className="py-6">
      <p className="pb-4 text-base font-bold text-black">Weight</p>
      {[1, 2, 3, 4, 5].map((vl) => (
        <label
          className={`bg-${
            values.weight.includes(vl.toString()) && "lightblue"
          }  py-2 px-3 mr-2 text-black font-bold text-xs border border-black-300 rounded`}
        >
          <Field
            type="checkbox"
            name="weight"
            value={`${vl}`}
            key={vl}
            className="hidden"
          />
          {labels[vl - 1]}
        </label>
      ))}
    </div>
  );
};
