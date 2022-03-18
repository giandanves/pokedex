export const handleLoadAndError = (loading, error, refetch) => {
  if (loading) {
    return "loading";
  }

  if (error) {
    return (
      <>
        <p>An error occurred while loading data.</p>
        <button onClick={() => refetch()}>Try Again</button>
      </>
    );
  } else return false;
};
