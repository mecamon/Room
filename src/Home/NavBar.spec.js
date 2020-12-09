import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';
import Logo from './Logo';
import NavigationItems from './NavigationItems';

describe('Navigation container', () => {
	it('Match the text logo', () => {
		const wrapper = shallow(<NavBar />);

		expect(wrapper.contains(<Logo />)).toBeTruthy();
		expect(wrapper.contains(<NavigationItems />)).toBeTruthy();
	});
});
