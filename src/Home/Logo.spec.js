import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Page logo', () => {
	it('Match the text logo', () => {
		const wrapper = shallow(<Logo />);
		const text = wrapper.find('h1').text();
		expect(text).toEqual('room');
	});
});
