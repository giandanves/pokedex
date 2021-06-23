import { Field } from "formik";

export const Height = () => {
  const labels = ["Extra Small", "Small", "Medium", "Tall", "Extra Tall"];
  return (
    <div>
      <p>Height</p>
      {[1, 2, 3, 4, 5].map((vl) => (
        <label>
          <Field type="checkbox" name="height" value={`${vl}`} key={vl} />
          {labels[vl - 1]}
        </label>
      ))}
    </div>
  );
};
