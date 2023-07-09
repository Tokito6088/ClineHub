import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/usefetch';
import Carousel from '../../../components/carousel/Carousel';

const UpComming = () => {
	const [endPoint, setEndPoint] = useState('movie');
	const [query, setQuery] = useState('upcoming');

	const { data, loading } = useFetch(`/${endPoint}/${query}`);

	const onTabChange = (tab) => {
		setEndPoint(tab == 'Movies' ? 'movie' : 'tv');
		setQuery(tab == 'TV' ? 'airing_today' : 'upcoming');
	};

	return (
		<div className='carouselSection'>
			<ContentWrapper>
				<span className='carouselTitle'>Upcomming</span>
				<SwitchTabs data={['Movies', 'TV']} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel endPoint={endPoint} data={data?.results} loading={loading} />
		</div>
	);
};

export default UpComming;
