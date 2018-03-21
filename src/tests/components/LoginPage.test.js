import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';


test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot();
});

test('should call start login on click', () =>{
    const startLogin =  jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>)
    wrapper.find('button').simulate('click');
    expect (startLogin).toHaveBeenCalled();
})