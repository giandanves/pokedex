export function HeightCheckBox(props) {
  const { formState, setFormState } = props;

  const clearAll = (e) => {
    e.preventDefault();
    setFormState((prev) => {
      let auxBoolean = false;
      prev.heights.forEach((height, i) => {
        prev.heights[i] = auxBoolean;
      });
      return { ...prev };
    });
  };

  const handleCheckBox = (i, checkBox) => {
    const isChecked = !checkBox;
    setFormState((prev) => {
      prev.heights[i] = isChecked;
      return { ...prev };
    });
  };
  return (
    <>
      <section>
        <p>Height</p>
        <input
          type="checkbox"
          id="height=1"
          name="height"
          checked={formState.heights[1]}
          onChange={() => handleCheckBox(1, formState.heights[1])}
        />
        <label>1</label>
        <input
          type="checkbox"
          id="height=2"
          name="height"
          checked={formState.heights[2]}
          onChange={() => handleCheckBox(2, formState.heights[2])}
        />
        <label>2</label>
        <input
          type="checkbox"
          id="height=3"
          name="height"
          checked={formState.heights[3]}
          onChange={() => handleCheckBox(3, formState.heights[3])}
        />
        <label>3</label>
        <input
          type="checkbox"
          id="height=4"
          name="height"
          checked={formState.heights[4]}
          onChange={() => handleCheckBox(4, formState.heights[4])}
        />
        <label>4</label>
        <input
          type="checkbox"
          id="height=5"
          name="height"
          checked={formState.heights[5]}
          onChange={() => handleCheckBox(5, formState.heights[5])}
        />
        <label>5</label>
      </section>
      <button onClick={(e) => clearAll(e)}>clear</button>
    </>
  );
}
