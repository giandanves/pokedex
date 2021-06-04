export const handleCheckBox = (ref, state, setState) => {
  if (ref.checked) {
    setState((prev) => [...prev, ref]);
  } else {
    const filteredCheckBox = state.filter(
      (checkbox) => checkbox !== ref
    );
    setState(filteredCheckBox);
  }
};


export const getBoxesChecked= (height, weight, poketype) => {
        let boxesCheckeds = '';    
        height.forEach((state)=> {
            boxesCheckeds+= `${state.id}&`;
        })
        weight.forEach((state) => {
          boxesCheckeds += `${state.id}&`;
        });
        poketype.forEach((state) => {
          boxesCheckeds += `${state.id}&`;
        });
        return boxesCheckeds;
}