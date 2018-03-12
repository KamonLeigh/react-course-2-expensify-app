

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


const jsx = (
    <Provider store={store}>
        <AppRouter />
    
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

