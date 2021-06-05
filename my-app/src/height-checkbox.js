//import { handleCheckBox } from "./handleCheckBox";

export function HeightCheckBox(props) {
  const { formState, setFormState } = props;

  //  const clearAll = (e) => {
  //  e.preventDefault();
  //setFormState((prev) => {
  //prev.heights.forEach((height) => {
  //console.dir(height);
  //height = false;
  //return height;
  //});
  //return { ...prev };
  ///});
  //};

  const handleCheckBox = (e, heightBox, i) => {
    e.target.checked = !heightBox;
    setFormState((prev) => {
      prev.heights[i] = !heightBox;
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
          onChange={(e) => handleCheckBox(e, formState.heights[1], 1)}
        />
        <label>1</label>
        <input
          type="checkbox"
          id="height=2"
          name="height"
          onChange={(e) => handleCheckBox(e, formState.heights[2], 2)}
        />
        <label>2</label>
        <input
          type="checkbox"
          id="height=3"
          name="height"
          onChange={(e) => handleCheckBox(e, formState.heights[3], 3)}
        />
        <label>3</label>
        <input
          type="checkbox"
          id="height=4"
          name="height"
          onChange={(e) => handleCheckBox(e, formState.heights[4], 4)}
        />
        <label>4</label>
        <input
          type="checkbox"
          id="height=5"
          name="height"
          onChange={(e) => handleCheckBox(e, formState.heights[5], 5)}
        />
        <label>5</label>
      </section>
      <button>clear</button>
    </>
  );
}
