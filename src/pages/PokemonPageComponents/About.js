import expand from "../../img/expand.svg";

function About() {
  return (
    <>
      <div className="pt-8 flex justify-between">
        <h2 className="text-black font-bold text-base">About</h2>
        <div className="flex">
          <p className="text-base text-primary font-bold">Gen 8</p>
          <img
            className="filter-primary ml-2"
            src={expand}
            alt="more generations"
          />
        </div>
      </div>
      <p className="py-4 text-sm text-black-700 font-normal">
        That's the area where pokemon description will be showed.
      </p>
    </>
  );
}

export default About;
