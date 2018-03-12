

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';
import { addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expense';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();

const expenseOne = store.dispatch(addExpense({description :'water bill', amount:4500}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas bill', createdAt:1000}));
const expenseThere= store.dispatch(addExpense({description :'Rent', amount:109500}));


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

 
//store.dispatch(setTextFilter('water'));

// addExpense -> Water bill
// addExpense -> Gas bill
// setTextFilter -> bill (2 items) -> water (1 item)
// getVisibleExpenses -> print visible ones to screen

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

