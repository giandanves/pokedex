const ResourceState = ({
  loading,
  renderLoading,
  error,
  renderError,
  render,
  message,
  renderDigivirusState,
}) => {
  if (loading) {
    return <>{renderLoading()}</>;
  }

  if (error) {
    return <>{renderError()}</>;
  }

  if (message) {
    return <>{renderDigivirusState()}</>;
  }

  return <> {render()} </>;
};

export default ResourceState;
