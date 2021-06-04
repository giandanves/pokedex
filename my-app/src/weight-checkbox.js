import { useState, useRef } from "react";

export function WeightCheckBox() {
  const [weightBoxesCheckeds, setWeightBoxesCheckeds] = useState([]);
  const refWeight1 = useRef(null);
  const refWeight2 = useRef(null);
  const refWeight3 = useRef(null);
  const refWeight4 = useRef(null);
  const refWeight5 = useRef(null);

  const handleCheckBox = (ref) => {
    if (ref.current.checked) {
      setWeightBoxesCheckeds((prev) => [...prev, ref.current]);
    } else {
      const filteredCheckBox = weightBoxesCheckeds.filter(
        (checkbox) => checkbox !== ref.current
      );
      setWeightBoxesCheckeds(filteredCheckBox);
    }
  };
  return (
    <>
      <section>
        <p>Weight</p>
        <input
          type="checkbox"
          id="weight=1"
          name="weight"
          ref={refWeight1}
          onChange={() => handleCheckBox(refWeight1)}
        />
        <label>1</label>
        <input
          type="checkbox"
          id="weight=2"
          name="weight"
          ref={refWeight2}
          onChange={() => handleCheckBox(refWeight2)}
        />
        <label>2</label>
        <input
          type="checkbox"
          id="weight=3"
          name="weight"
          ref={refWeight3}
          onChange={() => handleCheckBox(refWeight3)}
        />
        <label>3</label>
        <input
          type="checkbox"
          id="weight=4"
          name="weight"
          ref={refWeight4}
          onChange={() => handleCheckBox(refWeight4)}
        />
        <label>4</label>
        <input
          type="checkbox"
          id="weight=5"
          name="weight"
          ref={refWeight5}
          onChange={() => handleCheckBox(refWeight5)}
        />
        <label>5</label>
      </section>
    </>
  );
}
