import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseFrom from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/');
    }

    render(){
        return (
      <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add Expense</h1>
                </div>
            </div>
           <div className="content-container">
                <ExpenseFrom 
                onSubmit={this.onSubmit}
                />
                <button className="button--back">
                    <Link to="/dashboard"> Back </Link>
                </button>  
           </div>
            
        </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);