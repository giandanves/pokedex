import {useRef } from "react";
import { handleCheckBox } from "./handleCheckBox";

export function HeightCheckBox(props) {
  const {heightBoxesCheckeds, setHeightBoxesCheckeds} = props;
  const refHeight1 = useRef(null);
  const refHeight2 = useRef(null);
  const refHeight3 = useRef(null);
  const refHeight4 = useRef(null);
  const refHeight5 = useRef(null);

  return (
    <>
      <section>
        <p>Height</p>
        <input
          type="checkbox"
          id="height=1"
          name="height"
          ref={refHeight1}
          onChange={() =>
            handleCheckBox(
              refHeight1.current,
              heightBoxesCheckeds,
              setHeightBoxesCheckeds
            )
          }
        />
        <label>1</label>
        <input
          type="checkbox"
          id="height=2"
          name="height"
          ref={refHeight2}
          onChange={() =>
            handleCheckBox(
              refHeight2.current,
              heightBoxesCheckeds,
              setHeightBoxesCheckeds
            )
          }
        />
        <label>2</label>
        <input
          type="checkbox"
          id="height=3"
          name="height"
          ref={refHeight3}
          onChange={() =>
            handleCheckBox(
              refHeight3.current,
              heightBoxesCheckeds,
              setHeightBoxesCheckeds
            )
          }
        />
        <label>3</label>
        <input
          type="checkbox"
          id="height=4"
          name="height"
          ref={refHeight4}
          onChange={() =>
            handleCheckBox(
              refHeight4.current,
              heightBoxesCheckeds,
              setHeightBoxesCheckeds
            )
          }
        />
        <label>4</label>
        <input
          type="checkbox"
          id="height=5"
          name="height"
          ref={refHeight5}
          onChange={() =>
            handleCheckBox(
              refHeight5.current,
              heightBoxesCheckeds,
              setHeightBoxesCheckeds
            )
          }
        />
        <label>5</label>
      </section>
    </>
  );
}
