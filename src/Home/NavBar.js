import Logo from './Logo';
import NavigationItems from './NavigationItems';

function NavBar() {
	return (
		<div className='inline-flex items-center ml-12 mt-10'>
			<Logo />
			<NavigationItems />
		</div>
	);
}

export default NavBar;
