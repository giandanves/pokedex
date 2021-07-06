import { useFormikContext } from "formik";
import Checkbox from "./Checkbox";

export const Height = () => {
  const labels = ["Extra Small", "Small", "Medium", "Tall", "Extra Tall"];
  const { values } = useFormikContext();
  return (
    <div className="pt-9">
      <p className="pb-4 text-base font-bold text-black">Height</p>
      <div className="flex pb-6">
        {[1, 2, 3, 4, 5].map((vl) => (
          <Checkbox
            label={labels[vl - 1]}
            name="height"
            value={vl}
            values={values.height}
          />
        ))}
      </div>
    </div>
  );
};
