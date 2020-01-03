const BUY_PIZZA = "BUY_PIZZA";

function buyPizza() {
  return {
    type: BUY_PIZZA,
    status: "First action"
  };
}

// (previewState, action) => newState

const initialState = {
  numOfPizzas: 24
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PIZZA:
      return {
        ...state,
        numOfPizzas: state.numOfPizzas - 1
      };
    default:
      return state;
  }
};
