import ReactModal from "react-modal";
import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export const TeamsPage = () => {
  const { teamsIsOpen } = useContext(FilterContext);

  return (
    <ReactModal
      isOpen={teamsIsOpen}
      className={"Modal-Teams"}
      overlayClassName={"Overlay-Teams"}
    >
      <p className="h-20">Eta nós vó?</p>
    </ReactModal>
  );
};
