export default function reducer(state, action) { 
  const { type, payload } = action;
  const { value, key, progress} = payload;
  const step = `step${progress}`; 

  switch (type) {
    case "CHANGE_SELECT":   
      return {
        ...state,
        [step] : state[step].map((ele) => {
          if (ele.id === parseInt(key)) {
            ele.optionValue = value;
          } 
          return ele;
        })
      }
    case "TOGGLE_CHECKBOX":    
      return {
        ...state,
        [step] : state[step].map((ele) => {
          if (ele.id === parseInt(key)) {
            ele.isChecked = !ele.isChecked;
          } 
          return ele;
        })
      }  
    case "UPDATE_INPUT":
      return {
        ...state,
        [step] : state[step].map((ele) => {
          if (ele.id === parseInt(key)) {
            ele.value = value;
          } 
          return ele;
        })
      } 
    default:
      return state;
  }
}
