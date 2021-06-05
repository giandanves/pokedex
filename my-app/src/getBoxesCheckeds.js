export const getBoxesChecked = (height, weight, type, typeList) => {
  let boxesCheckeds = "";
  height.forEach((state, i) => {
    if (state) {
      boxesCheckeds += `height=${i}&`;
    }
  });
  weight.forEach((state, i) => {
    if (state) {
      boxesCheckeds += `weight=${i}&`;
    }
  });
  type.forEach((state, i) => {
    if (state) {
      boxesCheckeds += `type=${typeList[i].name}&`;
    }
  });
  return boxesCheckeds;
};
