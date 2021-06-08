export const handleLoadAndError = (loading, error) => {
  if (loading) {
    return "loading";
  }

  if (error) {
    return (
      <>
        <p>An error occurred while loading data.</p>
      </>
    );
  } else return false;
};
