import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';


test('if loading page renders correctly', () =>{
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});