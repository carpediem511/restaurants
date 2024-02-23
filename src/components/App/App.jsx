import Header from '../Header'
import Footer from '../Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage'

function App() {
	return (
		<div>

			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
				<Footer />
			</BrowserRouter>

		</div>
	);
}

export default App;
