import React from 'react';
import { shallow } from 'enzyme';
import Arrows from './Arrows';
import leftArrow from '../assets/icon-angle-left.svg';
import rightArrow from '../assets/icon-angle-right.svg';

describe('Button arrows', () => {
	it('Verifies the content of the left arrow', () => {
		const wrapper = shallow(<Arrows />);
		expect(wrapper.contains(<img src={leftArrow} alt='' />));
	});

	it('Verifies the content of the right arrow', () => {
		const wrapper = shallow(<Arrows />);
		expect(wrapper.contains(<img src={rightArrow} alt='' />));
	});
});
