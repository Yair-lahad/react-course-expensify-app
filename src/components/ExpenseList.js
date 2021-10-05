import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses';

// How we want to render the info when using our WrappedComponent
const ExpenseList = (props) => (
  <div>
    <h1>Expense List </h1>
    {props.expenses.map((expense) => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);
// Storage that delivered to our wrappedComponent which can later be rendered
const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses,state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
