import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component{
    onSubmit = (expense) => {
        //this.props.dispatch(editExpense(this.props.expense.id, expense));
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/');
    }

    onClick = () => {
        this.props.startRemoveExpense({id:this.props.expense.id})
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
            <div className="page-header">
                <div className="content-container">
                    <h1>Edit Expense</h1>
                </div>
            </div>
                <div className="content-container">
                    <ExpenseForm
                    expense={this.props.expense} 
                    onSubmit={this.onSubmit}
                    />

                    <div className="button--group">
                        <button className="button--remove" onClick={this.onClick}>
                            Remove Expense
                        </button>
                        <button className="button--back">
                            <Link to="/dashboard"> Back </Link>
                        </button>
                    </div>
                </div>
        </div>
        )
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    }
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
