import Header from '../Header'
import Footer from '../Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage'
import { useEffect, useState } from 'react';
import RestaurantPage from '../RestaurantPage';
import { FlapperSpinner } from "react-spinners-kit";
import CartBody from '../Cart';

function App() {

	const [restaurants, setRestaurants] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		fetch('https://www.bit-by-bit.ru/api/student-projects/restaurants')
			.then((response) => response.json())
			.then((result) => {
				setRestaurants(result)
			})
	}, [])

	return (
		<div>
			{loading ? (
				<div className="flex justify-center items-center h-screen">
					<FlapperSpinner size={50} color="#00CED1" />
				</div>
			) : (
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage restaurants={restaurants} />} />
						<Route path="/restaurant/:slug" element={<RestaurantPage restaurants={restaurants} loading={loading} setLoading={setLoading} />} />
						<Route path='/cart' element={<CartBody />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			)}
		</div>
	)
}

export default App;
