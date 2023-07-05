import React from 'react';

import ContentWrapper from '../contentWrapper/ContentWrapper';

import './style.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<ContentWrapper>
				<ul className='menuItems'>
					<li className='menuItem'>Terms Of Use</li>
					<li className='menuItem'>Privacy-Policy</li>
					<li className='menuItem'>About</li>
					<li className='menuItem'>Blog</li>
					<li className='menuItem'>FAQ</li>
				</ul>
				<div className='infoText'>this is Moviex Movie Web Application Using react Redux And TMDB api </div>
				<div className='infoText'>@ copy right all rights reserved - Yahya</div>
				<div className='infoText'>
					Contect Me Here - <code>Yahyamomin06@gmail.com</code>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
