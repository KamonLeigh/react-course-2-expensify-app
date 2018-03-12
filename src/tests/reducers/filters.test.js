import filterReducer from '../../reducers/filters';
import moment from 'moment';

/*

    @@INIT

    {
        type: '@@INIT'
    }

    This can be used to test the default. This nsures redux was loaded correctly.
    This is the action object
*/


test('should setup default filter values', () => {
    const state = filterReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', ()=>{
    const currentState = {
        text:'',
        startDate:undefined,
        sortBy:undefined,
        sortBy:'amount'
    }

    const action = {type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date');
});

// should set text filter

test('should set text filter', () => {
    const text = "set filter"
    const action = {
        type:"SET_TEXT_FILTER",
        text
    }
    const state = filterReducer(undefined, action);
    expect(state.text).toBe(text);
});

// should set startDate filter

test('should set startDate', () =>{
    const startDate = moment();
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    const state = filterReducer(undefined, action);
    expect(state.startDate).toBe(startDate);

});

// should set endDate filter

test('should set endDate', () => {
    const endDate = moment();
    const action = {
        type:"SET_END_DATE",
        endDate
    }
    const state = filterReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
});