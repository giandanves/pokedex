import errorPic from "./img/errorpicture.svg";
import digivirusPic from "./img/digivirus.svg";
import Button from "./components/Button";

const getMessageError = (error, message) => {
  if (error === "XXX") {
    return {
      title: "Unknown error",
      subtitle: message,
      img: digivirusPic,
    };
  }

  if (error >= 500) {
    return {
      title: "Internal Server Error",
      subtitle: "Please Try again later",
      img: errorPic,
    };
  }

  if (error >= 400) {
    return {
      title: "Bad Request",
      subtitle: "Something went wrong with your request",
      img: errorPic,
    };
  }
};

const Error = ({ error, refetch, message, renderDigimons }) => {
  if (error) {
    console.log(error);
    const { title, subtitle, img } = getMessageError(error, message);

    return (
      <div className="flex flex-col items-center py-[16px]">
        <div className="flex">
          <img src={img} alt={title} className="mr-2" />
          <div>
            <h2 className="text-7xl text-center font-bold text-black">
              {error}
            </h2>
            <h3 className="text-base text-center font-bold text-black">
              {title}
            </h3>
          </div>
        </div>

        <p className="p-2 text-sm text-black-500 font-normal">{subtitle}</p>
        {error === "XXX" ? (
          <div className="flex">
            <Button
              children={<p>Try again</p>}
              textColor={"primary"}
              bg={"white"}
              onClick={refetch}
              addClass={"button-try-again"}
            />

            <Button
              children={<p>See Digimons</p>}
              textColor={"white"}
              bg={"primary"}
              onClick={renderDigimons}
              addClass={"button-try-again"}
            />
          </div>
        ) : (
          <Button
            children={<p>Try again</p>}
            textColor={"white"}
            bg={"primary"}
            onClick={refetch}
            addClass={"button-try-again"}
          />
        )}
      </div>
    );
  }
};

export default Error;
