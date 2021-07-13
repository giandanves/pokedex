const getStatPercentage = (value) => {
  return parseInt((value / 255) * 100, 10);
};

export default getStatPercentage;
