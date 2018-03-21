import { login, logout } from '../../actions/auth';


test('should set up login object', ()=> {
    const uid = '667tttt'
    const state = login(uid);

    expect(state).toEqual({
        type: 'LOGIN',
        uid
    })
});

test('should set up logout object', () => {
    const state = logout();

    expect(state).toEqual({
        type: 'LOGOUT'
    });
});