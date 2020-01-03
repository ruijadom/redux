const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_PIZZA = "BUY_PIZZA";
const BUY_DONUTS = "BUY_DONUTS";

function buyPizza() {
  return {
    type: BUY_PIZZA,
    status: "First action"
  };
}

function buyDonuts() {
  return {
    type: BUY_DONUTS
  };
}

// (previewState, action) => newState

const initialPizzaState = {
  numOfPizzas: 24
};

const initialDonutsState = {
  numOfDonuts: 14
};

const pizzaReducer = (state = initialPizzaState, action) => {
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

const donutsReducer = (state = initialDonutsState, action) => {
  switch (action.type) {
    case BUY_DONUTS:
      return {
        ...state,
        numOfDonuts: state.numOfDonuts - 1
      };

    default:
      return state;
  }
};
const rootReducer = combineReducers({
  pizza: pizzaReducer,
  donuts: donutsReducer
});
const store = createStore(rootReducer); // Holds application state
console.log("Initial State", store.getState()); //Allows access to state via _getState()_

const unsubscribe = store.subscribe(
  () => console.log("Updated state", store.getState()) // Registers listeners via _subscribe(listener)_
);

store.dispatch(buyPizza()); // Allows state to be updated via _dispatch(action)_
store.dispatch(buyPizza());
store.dispatch(buyPizza());
store.dispatch(buyDonuts());
unsubscribe(); // Handles unregistering of listerners via the function returned by subscribe(listener)

// run node.js
