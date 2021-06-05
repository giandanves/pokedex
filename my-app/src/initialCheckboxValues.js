export function initialCheckboxValue(i) {
  const initialArray = new Array(i);

  for (let j = 0; j < i; j++) {
    initialArray[j] = false;
  }

  return initialArray;
}
