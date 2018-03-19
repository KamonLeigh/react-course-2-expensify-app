

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';
import { startSetExpenses } from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expense';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
//import './playground/promises';



const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    
    </Provider>
)

ReactDOM.render(<p>Loading....</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
});



