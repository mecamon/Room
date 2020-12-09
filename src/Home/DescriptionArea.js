import ShopNowButton from './ShopNowButton';

const DescriptionArea = () => {
	return (
		<div className='w-full h-full flex flex-row items-center justify-center'>
			<div className='flex flex-col justify-center w-3/5 h-full'>
				<h2 className='text-5xl text-gray-800 mb-5 font-semibold'>
					Discover innovative ways to decorate
				</h2>
				<span className='text-base text-gray-600'>
					We provide unmatched quality, comfort, and style for
					property owners across the country. Our experts combine form
					and function in bringing your vision to life. Create a room
					in your own style with our collection and make your property
					a reflection of you and what you love.
				</span>
				<ShopNowButton />
			</div>
		</div>
	);
};

export default DescriptionArea;
