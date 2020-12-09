import React from 'react';
import { shallow } from 'enzyme';
import DescriptionArea from './DescriptionArea';

describe('Description area', () => {
	it('Verifies the content of the h2 element', () => {
		const wrapper = shallow(<DescriptionArea />);

		const text = wrapper.find('h2').text();
		expect(text).toEqual('Discover innovative ways to decorate');
	});

	it('Check the content in the span element', () => {
		const wrapper = shallow(<DescriptionArea />).find('span');
		expect(
			wrapper.equals(
				<span className='text-base text-gray-600'>
					We provide unmatched quality, comfort, and style for
					property owners across the country. Our experts combine form
					and function in bringing your vision to life. Create a room
					in your own style with our collection and make your property
					a reflection of you and what you love.
				</span>
			)
		).toBeTruthy();
	});
});
