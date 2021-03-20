import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import './Posts.css';

const Posts = forwardRef(
	({ displayName, username, verified, text, image, avatar }, ref) => {
		return (
			<div className="posts" ref={ref}>
				<div className="posts__avatar">
					<Avatar src={avatar} />
				</div>
				<div className="posts__body">
					<div className="posts__header">
						<div className="posts__headerText">
							<h3>
								{displayName}{' '}
								<span className="posts__headerSpecial">
									{verified && (
										<VerifiedUserIcon className="posts__badge" />
									)}
									<span>@{username}</span>
								</span>
							</h3>
						</div>
						<div className="posts__headerDescription">
							<p>{text}</p>
						</div>
					</div>
					<img src={image} />
					<div className="posts__footer">
						<ChatBubbleOutlineIcon fontSize="small" />
						<RepeatIcon fontSize="small" />
						<FavoriteBorderIcon fontSize="small" />
						<PublishIcon fontSize="small" />
					</div>
				</div>
			</div>
		);
	}
);

export default Posts;
