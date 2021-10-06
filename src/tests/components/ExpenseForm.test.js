import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from 'moment';

test("should render ExpenseForm", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
  const wrapper = shallow(<ExpenseForm expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission ", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "New description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("description")).toBe(value);
});

test("should set note on input change", () => {
  const value = "New Note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value },
  });
  expect(wrapper.state("note")).toBe(value);
});

test("should set amount on input change", () => {
  const value = "7";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("amount")).toEqual(value);
});

test("should not set amount if invalid input", () => {
  const value = "12.1112";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("amount")).toEqual("");
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error")).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note,
  })
});

test("should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop('onDateChange')(now);
    expect(wrapper.state("createdAt")).toEqual(now);
  });

  // test("should set calender focus on change", () => {
  //   const value = true;
  //   const wrapper = shallow(<ExpenseForm />);
  //   wrapper.find("SingleDatePicker").prop('onFocusChange')({value});
  //   expect(wrapper.state("calenderFocused")).toBe(value);
  // });