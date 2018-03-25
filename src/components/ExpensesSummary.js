import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import expenseTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expense";


 export const ExpensesSummary = ({ expensesCount, expenseTotal}) => {
     const expenseNum =  expensesCount === 1 ? "expense" : "expenses";
     console.log(expensesCount);
     const total = numeral(expenseTotal / 100).format('$0,0.00')
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseNum} totalling <span>
                    {total}</span></h1>
                    <div className="page-header__actions">
                        <Link className="button"to="/create">Add Expense</Link>
                    </div>
                </div>
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