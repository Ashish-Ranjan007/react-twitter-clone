import React, { useState } from 'react';
import Tweetbox from './Tweetbox';
import './Feed.css';
import Posts from './Posts';
import db from './firebase';
import FlipMove from 'react-flip-move';

const Feed = () => {
	const [posts, setPosts] = useState([]);

	useState(() => {
		db.collection('posts').onSnapshot((snapshot) => {
			setPosts(snapshot.docs.map((doc) => doc.data()));
		});
	}, []);

	return (
		<div className="feed">
			<div className="feed__header">
				<h2>Home</h2>
			</div>
			<Tweetbox />
			<FlipMove>
				{posts.map((post) => {
					return (
						<Posts
							key={post.text}
							displayName={post.displayName}
							username={post.username}
							verified={post.verified}
							text={post.text}
							avatar={post.avatar}
							image={post.image}
						/>
					);
				})}
			</FlipMove>
		</div>
	);
};

export default Feed;
