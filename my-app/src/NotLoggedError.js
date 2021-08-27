import emptyIcon from "./img/empty-state-icon.svg";

const NotLoggedError = () => {
  return (
    <div className="mx-auto">
      <img src={emptyIcon} alt="Not logged" className="mx-auto" />
      <h2 className="text-center">It looks like you're not logged in</h2>
      <p className="text-center">Sign in and start adding pokemons to teams </p>
    </div>
  );
};

export default NotLoggedError;
