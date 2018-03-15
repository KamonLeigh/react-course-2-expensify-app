import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary }from "../../components/ExpensesSummary";
import expense from "../fixtures/expenses";


test('should handle single visible item', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expenseTotal={1000} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle multiple visible items', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expenseTotal={100000}/>);
    expect(wrapper).toMatchSnapshot();
})