import { useState, useRef } from "react";

export function WeightCheckBox(props) {
  const { weightBoxesCheckeds, setWeightBoxesCheckeds } = props;
  const refWeight1 = useRef(null);
  const refWeight2 = useRef(null);
  const refWeight3 = useRef(null);
  const refWeight4 = useRef(null);
  const refWeight5 = useRef(null);

  const handleCheckBox = (ref) => {
    if (ref.checked) {
      setWeightBoxesCheckeds((prev) => [...prev, ref]);
    } else {
      const filteredCheckBox = weightBoxesCheckeds.filter(
        (checkbox) => checkbox !== ref
      );
      setWeightBoxesCheckeds(filteredCheckBox);
    }
    console.dir(weightBoxesCheckeds);
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
          onChange={() => handleCheckBox(refWeight1.current)}
        />
        <label>1</label>
        <input
          type="checkbox"
          id="weight=2"
          name="weight"
          ref={refWeight2}
          onChange={() => handleCheckBox(refWeight2.current)}
        />
        <label>2</label>
        <input
          type="checkbox"
          id="weight=3"
          name="weight"
          ref={refWeight3}
          onChange={() => handleCheckBox(refWeight3.current)}
        />
        <label>3</label>
        <input
          type="checkbox"
          id="weight=4"
          name="weight"
          ref={refWeight4}
          onChange={() => handleCheckBox(refWeight4.current)}
        />
        <label>4</label>
        <input
          type="checkbox"
          id="weight=5"
          name="weight"
          ref={refWeight5}
          onChange={() => handleCheckBox(refWeight5.current)}
        />
        <label>5</label>
      </section>
    </>
  );
}
