const ResourceState = ({
  loading,
  renderLoading,
  error,
  renderError,
  render,
}) => {
  return <div>{renderError()}</div>;
};

export default ResourceState;
