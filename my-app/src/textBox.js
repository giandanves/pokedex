import { useRef } from "react";

export function TextBox(props) {
  const { formState, setFormState } = props;
  const textRef = useRef(null);

  const clearText = () => {
    textRef.current.value = "";
  };

  return (
    <>
      <input
        type="text"
        id="text-area"
        ref={textRef}
        onInput={() =>
          setFormState((prev) => {
            prev.search = textRef.current.value;
            return { ...prev };
          })
        }
      />
      <button onClick={() => clearText()}>clear</button>
    </>
  );
}
