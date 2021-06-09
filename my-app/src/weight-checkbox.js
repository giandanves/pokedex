export function WeightCheckBox(props) {
  const { formState, setFormState } = props;

  const clearAll = (e) => {
    e.preventDefault();
    setFormState((prev) => {
      prev.weights = prev.weights.map(() => false);
      return { ...prev };
    });
  };

  const handleCheckBox = (i, checkBox) => {
    const isChecked = !checkBox;
    setFormState((prev) => {
      prev.weights[i] = isChecked;
      return { ...prev };
    });
  };
  return (
    <>
      <section>
        <p>Weight</p>
        <input
          type="checkbox"
          id="weight=1"
          name="weight"
          checked={formState.weights[1]}
          onChange={() => handleCheckBox(1, formState.weights[1])}
        />
        <label>1</label>
        <input
          type="checkbox"
          id="weight=2"
          name="weight"
          checked={formState.weights[2]}
          onChange={() => handleCheckBox(2, formState.weights[2])}
        />
        <label>2</label>
        <input
          type="checkbox"
          id="weight=3"
          name="weight"
          checked={formState.weights[3]}
          onChange={() => handleCheckBox(3, formState.weights[3])}
        />
        <label>3</label>
        <input
          type="checkbox"
          id="weight=4"
          name="weight"
          checked={formState.weights[4]}
          onChange={() => handleCheckBox(4, formState.weights[4])}
        />
        <label>4</label>
        <input
          type="checkbox"
          id="weight=5"
          name="weight"
          checked={formState.weights[5]}
          onChange={() => handleCheckBox(5, formState.weights[5])}
        />
        <label>5</label>
      </section>
      <button onClick={(e) => clearAll(e)}>clear</button>
    </>
  );
}
