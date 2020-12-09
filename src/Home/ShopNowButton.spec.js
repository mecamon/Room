import React from 'react';
import { shallow } from 'enzyme';
import ShopNowButton from './ShopNowButton';
import arrow from '../assets/icon-arrow.svg';

describe('Button to shop', () => {
	it('Check the text in the button', () => {
		const wrapper = shallow(<ShopNowButton />);
		const textButton = wrapper.find('button').text();
		expect(textButton).toEqual('SHOP NOW');
	});

	it('Check if the button contains the SVG arrow icon', () => {
		const wrapper = shallow(<ShopNowButton />);
		expect(wrapper.contains(<img src={arrow} alt='' />));
	});
});
