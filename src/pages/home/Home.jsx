import React from 'react';
import './style.scss';
import HeroBanner from './herobanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import UpComming from './upComing/UpComing';
const Home = () => {
	return (
		<div className='homePage'>
			<HeroBanner />
			<Trending />
			<Popular />
			<TopRated />
			<UpComming />
		</div>
	);
};

export default Home;
