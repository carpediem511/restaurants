import Header from '../Header'
import Footer from '../Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage'
import { useEffect, useState } from 'react';

function App() {

	const [restaurants, setRestaurants] = useState([])

	useEffect(() => {
		fetch('https://www.bit-by-bit.ru/api/student-projects/restaurants')
			.then((response) => response.json())
			.then((result) => {
				setRestaurants(result)
			})
	}, [])

	return (
		<div>

			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage restaurants={restaurants} />} />
				</Routes>
				<Footer />
			</BrowserRouter>

		</div>
	);
}

export default App;
