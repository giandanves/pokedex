import { Field } from "formik";

export const Weight = () => {
  const labels = ["Extra Light", "Light", "Medium", "Large", "Extra Large"];
  return (
    <div>
      <p>Weight</p>
      {[1, 2, 3, 4, 5].map((vl) => (
        <label>
          <Field type="checkbox" name="weight" value={`${vl}`} key={vl} />
          {labels[vl - 1]}
        </label>
      ))}
    </div>
  );
};
