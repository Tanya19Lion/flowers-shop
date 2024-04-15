// import logo from './logo.svg';
import { Suspense } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Spinner from './components/spinner/Spinner';

import {MainPage, AboutUs, Clients, Contacts, Delivery, FAQ, Policy, Page404, FinalPage, OneBouquetPage} from './pages/index';
import { CatalogContainer } from './containers/CatalogContainer';

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Header />
				<Suspense fallback={<Spinner />}>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='about-us' element={<AboutUs />} />
						<Route path='catalog' element={<CatalogContainer />} />
						<Route path='catalog/:id/' element={<OneBouquetPage />} />
						<Route path='clients' element={<Clients />} />
						<Route path='contacts' element={<Contacts />} />
						<Route path='delivery' element={<Delivery />} />
						<Route path='faq' element={<FAQ />} />
						<Route path='policy' element={<Policy />} />
						<Route path='final-page' element={<FinalPage />} />
						<Route path="*" element={<Page404 />} />
					</Routes>
				</Suspense>
				<Footer />	
			</div>
		</BrowserRouter>
	);
}

export default App;
