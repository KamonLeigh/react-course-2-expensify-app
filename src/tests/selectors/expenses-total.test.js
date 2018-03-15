import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";
import moment from 'moment';


it('should return zero if no expense', () => {
    const expense = selectExpensesTotal();
    expect(expense).toBe(0);
});

it('should correctly add up a single expense', () =>{
    const sum = selectExpensesTotal([expenses[1]]);
    expect(sum).toBe(expenses[1].amount);
});

it('should correctly add multiple expenses', () =>{
    const sum = selectExpensesTotal(expenses);
    expect(sum).toBe(114195);
});