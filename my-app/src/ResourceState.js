const ResourceState = ({
  loading,
  renderLoading,
  error,
  renderError,
  render,
}) => {
  if (loading) {
    return <>{renderLoading()}</>;
  }

  if (error) {
    return <>{renderError()}</>;
  }

  return <> {render()} </>;
};

export default ResourceState;
