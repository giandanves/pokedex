const ResourceState = ({
  loading,
  renderLoading,
  error,
  renderError,
  render,
}) => {
  if (loading) {
    renderLoading();
    return;
  }

  if (error) {
    renderError();
    return;
  }

  render();
};

export default ResourceState;
