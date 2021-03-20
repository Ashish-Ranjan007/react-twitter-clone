import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from './firebase';
import './Tweetbox.css';

const Tweetbox = () => {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = (e) => {
		e.preventDefault();
		db.collection('posts').add({
			displayName: 'Ashish Ranjan',
			username: 'ashish_ranjan',
			verified: 'true',
			text: tweetMessage,
			image: tweetImage,
			avata: 'https://picsum.photos/200',
		});
		setTweetImage('');
		setTweetImage('');
	};

	return (
		<div className="tweetbox">
			<form>
				<div className="tweetbox__input">
					<Avatar src="./test.jpg" />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="What's happening?"
						type="text"
					/>
				</div>
				<input
					onChange={(e) => setTweetImage(e.target.value)}
					value={tweetImage}
					className="tweetbox__imageInput"
					placeholder="Optional: Enter the URL"
					type="text"
				/>
				<Button
					onClick={sendTweet}
					type="submit"
					className="tweetbox__tweetButton"
				>
					Tweet
				</Button>
			</form>
		</div>
	);
};

export default Tweetbox;
