import { useState, useRef } from "react";

export function HeightCheckBox() {
  const [heightBoxesCheckeds, setHeightBoxesCheckeds] = useState([]);
  const refHeight1 = useRef(null);
  const refHeight2 = useRef(null);
  const refHeight3 = useRef(null);
  const refHeight4 = useRef(null);
  const refHeight5 = useRef(null);

  const handleCheckBox = (ref) => {
    if (ref.current.checked) {
      setHeightBoxesCheckeds((prev) => [...prev, ref.current]);
    } else {
      const filteredCheckBox = heightBoxesCheckeds.filter(
        (checkbox) => checkbox !== ref.current
      );
      setHeightBoxesCheckeds(filteredCheckBox);
    }
  };

  return (
    <>
      <section>
        <p>Height</p>
        <input
          type="checkbox"
          id="height=1"
          name="height"
          ref={refHeight1}
          onChange={() => handleCheckBox(refHeight1)}
        />
        <label>1</label>
        <input
          type="checkbox"
          id="height=2"
          name="height"
          ref={refHeight2}
          onChange={() => handleCheckBox(refHeight2)}
        />
        <label>2</label>
        <input
          type="checkbox"
          id="height=3"
          name="height"
          ref={refHeight3}
          onChange={() => handleCheckBox(refHeight3)}
        />
        <label>3</label>
        <input
          type="checkbox"
          id="height=4"
          name="height"
          ref={refHeight4}
          onChange={() => handleCheckBox(refHeight4)}
        />
        <label>4</label>
        <input
          type="checkbox"
          id="height=5"
          name="height"
          ref={refHeight5}
          onChange={() => handleCheckBox(refHeight5)}
        />
        <label>5</label>
      </section>
    </>
  );
}
