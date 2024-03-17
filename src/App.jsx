// import logo from './logo.svg';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {AboutUs, Catalog, Clients, Contacts, Delivery, FAQ, MainPage, Policy, Page404} from './pages/index'

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path='/' element={<MainPage/>} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/clients' element={<Clients />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/delivery' element={<Delivery />} />
					<Route path='/faq' element={<FAQ />} />
					<Route path='/policy' element={<Policy />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
				<Footer />					
			</div>
		</BrowserRouter>
	);
}

export default App;
