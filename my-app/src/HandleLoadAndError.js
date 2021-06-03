export const handleLoadAndError = (loading, error) => {
  if (loading) {
    return "loading";
  }

  if (error) {
    return "error";
  } else return false;
};
