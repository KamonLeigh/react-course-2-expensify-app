import authReducer from '../../reducers/auth';

const authState = {}


test('should log in user with id', () =>{
 
    const uid = 'nfnfn77';
    const action = {
    type:'LOGIN',
    uid
 }
const state = authReducer(authState, action);
expect(state.uid).toEqual(action.uid);

});

test('should log out user', ()=>{
    const action = {
        type: 'LOGOUT'
    }

    const state = authReducer(authState, action);
    expect(state.uid).toBeFalsy();
})