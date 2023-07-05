import React, { useEffect, useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/usefetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Image';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
	const [background, setBackground] = useState('');
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

	const { url } = useSelector((state) => state.Home);

	const { data, loading } = useFetch('/movie/popular');

	useEffect(() => {
		const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
		setBackground(bg);
	}, [data]);
	console.log(background);

	const searchQueryHandler = (event) => {
		if (event.key == 'Enter' && query.length > 0) {
			navigate(`/search/${query}`);
		}
	};
	return (
		<div className='heroBanner'>
			{!loading && (
				<div className='backdrop-img'>
					<Img src={background} />
				</div>
			)}
			<div className='opacity-layer'></div>
			<ContentWrapper>
				<div className='wrapper'>
					<div className='heroBannerContent'>
						<span className='title'> welcome.</span>
						<span className='subtitle'>
							Millions of Movies , TV shows and people to descover.
							<big>explore now.</big>
						</span>
						<div className='searchInput'>
							<input type='text' placeholder='Search for a Movie or TV shows....' onKeyUp={searchQueryHandler} onChange={(e) => setQuery(e.target.value)} />
							<button>Search</button>
						</div>
					</div>
				</div>
			</ContentWrapper>
		</div>
	);
};

export default HeroBanner;
