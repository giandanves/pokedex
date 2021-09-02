import WithAuth from "./withAuth";

const requireAuth = (Component) => {
  return () => (
    <WithAuth>
      <Component />
    </WithAuth>
  );
};

export default requireAuth;
