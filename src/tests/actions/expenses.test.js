import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("Should setup edit expense action object", () => {
    const action = editExpense("123abc", { note: 'new note value'});
    expect(action).toEqual({
      type: "EDIT_EXPENSE",
      id: "123abc",
      updates:{
          note:'new note value'
      }
    });
  });

  test('should setup add expense action object with provided values', ()=>{
        const expenseData= {
            description:"rent",
            note:"last month",
            amount: 10,
            createdAt: 1110,
        }
        const action = addExpense (expenseData);
        expect(action).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                ...expenseData,
                id: expect.any(String)
            }
        })
  })
  test('should setup add expense action object with defaulted values', ()=>{
    const action = addExpense ();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})
