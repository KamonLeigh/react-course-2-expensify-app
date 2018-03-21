import { shallow } from 'enzyme';
import React from 'react';
import { Header }from '../../components/Header';

let startLogout, wrapper;

beforeEach(() =>{
    startLogout = jest.fn();
    
    wrapper = shallow(
        <Header
        startLogout={startLogout}
    />
    )
})






test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
    
    
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer =  new ReactShallowRenderer;
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());
});


test('should call startLogOut on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
})