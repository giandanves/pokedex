import { useRef } from "react";

export function TextBox(props) {
  const { formState, setFormState } = props;
  const textRef = useRef(null);

  const clearText = (e) => {
    e.preventDefault();
    const emptyValue = "";
    setFormState((prev) => {
      prev.search = emptyValue;
      return { ...prev };
    });
  };

  return (
    <>
      <input
        type="text"
        id="text-area"
        ref={textRef}
        value={formState.search}
        onInput={() =>
          setFormState((prev) => {
            prev.search = textRef.current.value;
            return { ...prev };
          })
        }
      />
      <button onClick={(e) => clearText(e)}>clear</button>
    </>
  );
}
