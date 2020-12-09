import React from 'react';
import { shallow } from 'enzyme';
import NavigationItems from './NavigationItems';

describe('Navigation links', () => {
	it('Checks for navigation links in the UL', () => {
		const wrapper = shallow(<NavigationItems />);
		const navLinks = wrapper.find('li');

		navLinks.forEach(link => {
			expect(link.exists('a')).toBeTruthy();
		});
	});
});
