import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expenseTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expense";


 export const ExpensesSummary = ({ expensesCount, expenseTotal}) => {
     const expenseNum =  expensesCount === 1 ? "expense" : "expenses";
     console.log(expensesCount);
     const total = numeral(expenseTotal / 100).format('$0,0.00')
        return (
            <div>
                <h1>Viewing {expensesCount} {expenseNum} totalling {total}</h1>
            </div>
        )

}


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length,
        expenseTotal: expenseTotal(visibleExpenses)
    }
}


export default connect(mapStateToProps)(ExpensesSummary)