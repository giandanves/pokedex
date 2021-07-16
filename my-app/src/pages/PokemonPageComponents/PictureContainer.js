import getBackground from "../../getBackground";
import classNames from "classnames";

const PictureContainer = ({ type, picture }) => {
  return (
    <div
      className={classNames(
        getBackground(type),
        "to-transparent w-full sm:w-5/12 bg-opacity-20 bg-gradient-to-br flex items-center justify-center p-2"
      )}
    >
      <div className="max-w-sm">
        <img src={picture} alt="name" />
      </div>
    </div>
  );
};

export default PictureContainer;
