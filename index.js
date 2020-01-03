const redux = require("redux");
const createStore = redux.createStore;

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

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(buyPizza());
store.dispatch(buyPizza());
store.dispatch(buyPizza());
unsubscribe();
