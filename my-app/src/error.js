import errorPic from "./img/errorpicture.svg";
import Button from "./components/Button";

const getMessageError = (error) => {
  if (error >= 500) {
    return {
      title: "Internal Server Error",
      subtitle: "Please Try again later",
    };
  }

  if (error >= 400) {
    return {
      title: "Bad Request",
      subtitle: "Something went wrong with your request",
    };
  }
};

const Error = ({ error, refetch }) => {
  const { title, subtitle } = getMessageError(error);

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <img src={errorPic} alt={title} className="mr-2" />
        <div>
          <h2 className="text-7xl text-center font-bold text-black">{error}</h2>
          <h3 className="text-base text-center font-bold text-black">
            {title}
          </h3>
        </div>
      </div>

      <p className="p-2 text-sm text-black-500 font-normal">{subtitle}</p>
      <Button
        children={<p>Try again</p>}
        textColor={"white"}
        bg={"primary"}
        onClick={refetch}
        addClass={"button-try-again"}
      />
    </div>
  );
};

export default Error;
