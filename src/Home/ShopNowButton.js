import arrow from '../assets/icon-arrow.svg';

const ShopNowButton = () => {
	return (
		<button className='flex items-center w-60 tracking-widest font-semibold mt-5'>
			SHOP NOW
			<img src={arrow} alt='' className='ml-5' />
		</button>
	);
};

export default ShopNowButton;
