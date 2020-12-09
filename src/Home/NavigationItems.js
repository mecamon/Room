function NavigationItems() {
	const titles = ['home', 'shop', 'about', 'contact'];
	const links = titles.map((title, index) => (
		<li key={index} className='list-none inline-block ml-8'>
			<a href='#' className=' hover:underline'>
				{title}
			</a>
		</li>
	));

	return <ul className='text-base font-main text-gray-50'>{links}</ul>;
}

export default NavigationItems;
