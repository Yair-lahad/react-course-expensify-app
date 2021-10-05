console.warn = () => {};
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
store.dispatch(addExpense({ description: "Water bill", amount:100, createdAt: -100 }));
store.dispatch(addExpense({ description: "Gas bill", amount:300, createdAt: 100 }));
store.dispatch(addExpense({ description: "Rent", amount:10000, createdAt: -1000 }));
// store.dispatch(setTextFilter("water"));
// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 3000);


// hoc 
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));