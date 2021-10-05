import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from 'moment'

test("Should setup default expenses values", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id ", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});
test("should not remove expense by unfound id ", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense ", () => {
  const testExpense = {
    id: "999",
    description: "test Expense",
    note: "",
    amount: 0,
    createdAt: 0,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: testExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses,testExpense]);
});

test("should edit expense ", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates:{
      note: 'edited while tested'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('edited while tested');
});

test("should not edit expense with unfound id ", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: '-1',
    updates:{
      note: 'edited while tested'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
