import React from 'react';
import { shallow } from 'enzyme';
import AboutProducts from './AboutProducts';

describe('About products', () => {
	it('Verifies the content of the h3 element', () => {
		const wrapper = shallow(<AboutProducts />);

		const text = wrapper.find('h3').text();
		expect(text).toEqual('ABOUT OUR FURNITURE');
	});

	it('Check the content in the span element', () => {
		const wrapper = shallow(<AboutProducts />).find('span');
		expect(
			wrapper.equals(
				<span>
					Our multifunctional collection blends design and function to
					suit your individual taste. Make each room unique, or pick a
					cohesive theme that best express your interest and what
					inspires you. Find the furniture pieces you need from
					traditional to contemporany styles or anything in between.
					Products specialist are available to help you create your
					dream space.
				</span>
			)
		).toBeTruthy();
	});
});
