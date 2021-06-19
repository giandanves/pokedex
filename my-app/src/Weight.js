import { Field } from "formik";

export const Weight = () => {
  return (
    <div>
      <p>Weight</p>
      {[1, 2, 3, 4, 5].map((vl) => (
        <label>
          <Field type="checkbox" name="weight" value={`${vl}`} key={vl} />
          {vl}
        </label>
      ))}
    </div>
  );
};
