import React from 'react';
import './Widgets.css';
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input placeholder="Search Twitter" type="text" />
			</div>
			<div className="widgets__container">
				<h2>What's happening</h2>
				<TwitterTweetEmbed tweetId={'10765432100123456789'} />
			</div>
		</div>
	);
};

export default Widgets;
