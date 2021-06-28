import ReactModal from "react-modal";

export const FilterModal = () => {
  return (
    <ReactModal
      isOpen={true}
      style={{
        overlay: {},
        content: {
          height: "100%",
          width: "100%",
          maxWidth: "666px",
          maxHeight: "720px",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
        },
      }}
    >
      <p>FILTER MODAL</p>
    </ReactModal>
  );
};
