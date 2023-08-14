import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate, useLocation } from 'react-router-dom';

import './style.scss';

import ContentWrapper from '../contentWrapper/ContentWrapper';

const Header = () => {
	const [show, setShow] = useState('top');
	const [lastScrollY, setLastScrollY] = useState(0);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [query, setQuery] = useState('');
	const [showSearch, setShowSearch] = useState('');
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const controlNavbar = () => {
		if (window.scrollY > 200) {
			if (window.scrollY > lastScrollY) {
				setShow('hide');
			} else {
				setShow('show');
			}
		} else {
			setShow('top');
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	const openSearch = () => {
		setMobileMenu(false);
		setShowSearch(true);
	};
	const openMobileMenu = () => {
		setMobileMenu(true);
		setShowSearch(false);
	};

	const searchQueryHandler = (event) => {
		if (event.key == 'Enter' && query.length > 0) {
			event.preventDefault();
			navigate(`search/${query}`);
			setTimeout(() => {
				setShowSearch(false);
			}, 300);
		}
	};
	useEffect(() => {
		searchQueryHandler;
	}, [query]);

	const navigationHandler = (type) => {
		if (type === 'movie') {
			navigate('/explore/movie');
		} else {
			navigate('/explore/tv');
		}
		setMobileMenu(false);
	};

	return (
		<header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
			<ContentWrapper>
				<div className='logo' onClick={() => navigate('/')}>
					<div className='logoText'>
						Cline<span>Hub</span>
					</div>
				</div>
				<ul className='menuItems'>
					<li className='menuItem' onClick={() => navigationHandler('movie')}>
						Movies
					</li>
					<li className='menuItem' onClick={() => navigationHandler('tv')}>
						TV Shows
					</li>
					<li className='menuItem'>
						<HiOutlineSearch onClick={openSearch} />
					</li>
				</ul>
				<div className='mobileMenuItems'>
					<HiOutlineSearch onClick={openSearch} />
					{mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
				</div>
			</ContentWrapper>
			{showSearch && (
				<div className='searchBar'>
					<ContentWrapper>
						<div className='headerSearchInput'>
							<input type='text' placeholder='Search for a Movie or TV shows....' onKeyDown={searchQueryHandler} onChange={(e) => setQuery(e.target.value)} />
							<VscChromeClose onClick={() => setShowSearch(false)} />
						</div>
					</ContentWrapper>
				</div>
			)}
		</header>
	);
};

export default Header;
