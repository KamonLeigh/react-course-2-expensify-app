import { createStore} from 'redux';

// Action generators - functions that return action objects

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number'? payload.incrementBy : 1
// });

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// REDUCERS

// 1. Reducers are pure functions
// 2. Never change state or action 

const countReduce = (state = {count : 0},action) => {
    switch(action.type){
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'RESET':
        return {
            count: state.count = 0
        }
        case 'SET':
        return{
            count:action.count
        }    
        default:
        return state;
    }; 
    
}


const store = createStore(countReduce);


//console.log(store.getState());

// Action = than an object that get sent to the store

// I'd like to increment the count

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})



//unsubscribe();


store.dispatch(incrementCount({incrementBy: 10}))
store.dispatch(incrementCount());

store.dispatch(resetCount());


store.dispatch(decrementCount());


store.dispatch(decrementCount({decrementBy:10}));
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })

store.dispatch(setCount({count:200}));


//decrementBy 10

