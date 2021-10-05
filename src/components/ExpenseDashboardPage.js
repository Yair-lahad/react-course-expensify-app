import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

// the component that Wrapps other components in the home page
const ExpenseDashboardPage = () => (
  <div>
  <ExpenseListFilters />
  <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
