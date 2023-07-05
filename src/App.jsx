import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchdatafromapi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getapiconfiguration, getgenres } from './store/homeSlice';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
function App() {
	const Dispatch = useDispatch();

	const { url } = useSelector((state) => state.Home);
	useEffect(() => {
		FetchData();
		genresCall();
	}, []);
	const FetchData = () => {
		fetchdatafromapi('/configuration').then((res) => {
			const backUrl = {
				backdrop: res.images.secure_base_url + 'original',
				poster: res.images.secure_base_url + 'original',
				profile: res.images.secure_base_url + 'original',
			};
			Dispatch(getapiconfiguration(backUrl));
		});
	};

	const genresCall = async () => {
		let promises = [];
		let endpoints = ['tv', 'movie'];
		let allGenres = {};
		endpoints.forEach((url) => {
			promises.push(fetchdatafromapi(`/genre/${url}/list`));
		});

		const data = await Promise.all(promises);
		data.map(({ genres }) => {
			return genres.map((item) => (allGenres[item.id] = item));
		});
		Dispatch(getgenres(allGenres));
	};
	return (
		// https://gist.github.com/ShariqAnsari88/09dbadfd81c41b399a30f6eb9f1f9548
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/:mediaType/:id' element={<Details />} />
					<Route path='/search/:query' element={<SearchResult />} />
					<Route path='/explore/:mediaType' element={<Explore />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
