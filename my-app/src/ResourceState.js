const ResourceState = ({
  loading,
  renderLoading,
  error,
  renderError,
  render,
  digimons,
  renderDigimons,
}) => {
  if (loading) {
    return <>{renderLoading()}</>;
  }

  if (error) {
    return <>{renderError()}</>;
  }

  if (digimons) {
    return <>{renderDigimons()}</>;
  }

  return <> {render()} </>;
};

export default ResourceState;
