import classNames from "classnames";

export const NavbarIcon = (props) => {
  const { img, title, path } = props;
  let onPage = false;

  if (window.location.pathname === path) {
    onPage = true;
  }
  return (
    <button className="flex h-12 pr-3">
      <div className="flex">
        <img
          src={img}
          alt={title}
          className={classNames("self-end mr-2", {
            "filter-primary": onPage,
          })}
        />
        <div className="self-end">
          <h2
            className={classNames("text-base text-black font-bold", {
              "text-primary": onPage,
            })}
          >
            {title}
          </h2>
          {onPage && (
            <div
              className="h-0.5 w-full bg-primary
               rounded-lg"
            ></div>
          )}
        </div>
      </div>
    </button>
  );
};

export const MobileIcon = (props) => {
  const { img, title, path } = props;

  let onPage = false;

  if (window.location.pathname === path) {
    onPage = true;
  }

  return (
    <button className="flex flex-col h-full items-center justify-between">
      <div className="h-full flex flex-col justify-center">
        <img
          src={img}
          alt={title}
          className={classNames({ "filter-primary": onPage })}
        />
      </div>
      <div
        className={classNames("h-1 w-10 rounded-lg bg-white", {
          "bg-primary": onPage,
        })}
      ></div>
    </button>
  );
};
