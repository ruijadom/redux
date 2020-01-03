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

const store = createStore(reducer); // Holds application state
console.log("Initial State", store.getState()); //Allows access to state via _getState()_

const unsubscribe = store.subscribe(
  () => console.log("Updated state", store.getState()) // Registers listeners via _subscribe(listener)_
);

store.dispatch(buyPizza()); // Allows state to be updated via _dispatch(action)_
store.dispatch(buyPizza()); // Allows state to be updated via _dispatch(action)_
store.dispatch(buyPizza()); // Allows state to be updated via _dispatch(action)_
unsubscribe(); // Handles unregistering of listerners via the function returned by subscribe(listener)
