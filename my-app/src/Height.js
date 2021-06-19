import { Field } from "formik";

export const Height = () => {
  return (
    <div>
      <p>Height</p>
      {[1, 2, 3, 4, 5].map((vl) => (
        <label>
          <Field type="checkbox" name="height" value={`${vl}`} key={vl} />
          {vl}
        </label>
      ))}
    </div>
  );
};
