import { useFormikContext } from "formik";
import Checkbox from "./Checkbox";

export const Weight = () => {
  const labels = ["Extra Light", "Light", "Medium", "Large", "Extra Large"];
  const { values } = useFormikContext();
  return (
    <div className="py-6">
      <p className="pb-4 text-base font-bold text-black">Weight</p>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((vl) => (
          <Checkbox
            label={labels[vl - 1]}
            name="weight"
            value={vl}
            values={values.weight}
          />
        ))}
      </div>
    </div>
  );
};
