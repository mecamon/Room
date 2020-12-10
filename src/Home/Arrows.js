import leftArrow from '../assets/icon-angle-left.svg';
import rightArrow from '../assets/icon-angle-right.svg';

const Arrows = () => {
	return (
		<div className='w-full'>
			<button className='bg-black hover:bg-gray-900 w-3/6 h-20 inline-flex justify-center items-center'>
				<img src={leftArrow} alt='' />
			</button>
			<button className='bg-black hover:bg-gray-900 w-3/6 h-20 inline-flex justify-center items-center'>
				<img src={rightArrow} alt='' />
			</button>
		</div>
	);
};

export default Arrows;
