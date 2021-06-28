import ReactModal from "react-modal";
import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export const TeamsPage = () => {
  const { teamsIsOpen } = useContext(FilterContext);

  return (
    <ReactModal
      isOpen={teamsIsOpen}
      style={{
        overlay: {
          top: "64px",
          width: "100%",
        },
        content: {
          border: 0,
          padding: 0,
          inset: 0,
        },
      }}
    >
      <p>Eta nós vó?</p>
    </ReactModal>
  );
};
