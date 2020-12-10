import NavBar from './Home/NavBar';
import DescriptionArea from './Home/DescriptionArea';
import Arrows from './Home/Arrows';
import AboutProducts from './Home/AboutProducts';

const App = () => {
	return (
		<div className='box-border w-screen h-screen grid grid-cols-10 grid-rows-3'>
			{/* static area */}
			<div className='col-start-1 col-end-7 row-start-1 row-end-3 z-10'>
				<NavBar />
			</div>
			<div className='col-start-7 col-end-8 row-start-1 row-end-3 self-end z-10'>
				<Arrows />
			</div>

			{/* Slider area */}
			<div className='col-start-1 col-end-11 row-start-1 row-end-3'>
				<div className='w-full h-full grid grid-cols-10 grid-rows-1'>
					<div className='col-start-1 col-end-7 bg-chair-img bg-no-repeat bg-cover bg-center'></div>
					<div className='col-start-7 col-end-11'>
						<DescriptionArea />
					</div>
				</div>
			</div>

			<div className='col-start-1 col-end-4 row-start-3 row-end-4 bg-dark-chairs bg-no-repeat bg-cover bg-center'></div>
			<div className='col-start-4 col-end-8 row-start-3 row-end-4'>
				<AboutProducts />
			</div>
			<div className='col-start-8 col-end-11 row-start-3 row-end-4 bg-white-chair bg-no-repeat bg-cover bg-center'></div>
		</div>
	);
};

export default App;
