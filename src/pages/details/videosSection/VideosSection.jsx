import React, { useState } from 'react';

import './style.scss';

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import { PlayIcon } from '../PlayIcon';
import VideoPopup from '../../../components/videopopup/VideoPopup';
import Img from '../../../components/lazyLoadImage/Image';

const VideosSection = ({ data, loading }) => {
	const [show, setShow] = useState(false);
	const [videoId, setVideoId] = useState(null);

	const loadingSkeleton = () => {
		return (
			<div className='skItem'>
				<div className='thumb skeleton'></div>
				<div className='row skeleton'></div>
				<div className='row2 skeleton'></div>
			</div>
		);
	};

	return (
		<div className='videosSection'>
			<ContentWrapper>
				<div className='sectionHeading'>Official Videos</div>
				{!loading ? (
					<div className='videos'>
						{data?.results.map((videos) => (
							<div
								key={videos.id}
								className='videoItem'
								onClick={() => {
									setVideoId(videos.key);
									setShow(true);
								}}>
								<div className='videoThumbnail'>
									<Img src={`https://img.youtube.com/vi/${videos.key}/mqdefault.jpg`} />
									<PlayIcon />
								</div>
								<div className='videoTitle'>{videos.name}</div>
							</div>
						))}
					</div>
				) : (
					<div className='videoSkeleton'>
						{loadingSkeleton()}
						{loadingSkeleton()}
						{loadingSkeleton()}
						{loadingSkeleton()}
					</div>
				)}
			</ContentWrapper>
			<VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
		</div>
	);
};

export default VideosSection;
