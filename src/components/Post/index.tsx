import './Post.scss';

import { Avatar } from '@material-ui/core';
import React from 'react';

import { ReactComponent as Threedot } from '../../assets/icons/threedot.svg';
import { ChatBubbleOutlineRoundedIcon, NearMeRoundedIcon, ThumbUpRoundedIcon } from '../../utils/icons';

interface PostProps {
    profilePic: string;
    username: string;
    text?: string;
    timestamp: string;
    image?: string;
}

function Post(props: PostProps): React.ReactElement {
    const { profilePic, username, text, timestamp, image } = props;
    return (
        <div className="post">
            <div className="top">
                <Avatar src={profilePic} />
                <div className="info">
                    <div className="name">
                        <h4>
                            <strong>
                                <span className="name">{username}</span>
                            </strong>
                        </h4>
                    </div>
                    <div className="date">
                        <span> {timestamp}</span>
                    </div>
                </div>
                <div className="threedot">
                    <Threedot />
                </div>
            </div>
            {text && (
                <div className="text">
                    <span>{text}</span>
                </div>
            )}
            {image && (
                <div className="image">
                    <img src={image} alt="Post Image" />
                </div>
            )}
            <div className="bottomAction">
                <div className="action">
                    <ThumbUpRoundedIcon className="postAction" />
                    <h4>좋아요</h4>
                </div>
                <div className="action">
                    <ChatBubbleOutlineRoundedIcon className="postAction" />
                    <h4>댓글 달기</h4>
                </div>
                <div className="action">
                    <NearMeRoundedIcon className="postAction" />
                    <h4>공유하기</h4>
                </div>
            </div>
        </div>
    );
}

const iconList = [
    {
        Icon: <ThumbUpRoundedIcon />,
        title: 'Like',
        color: 'grey',
    },
    {
        Icon: <ChatBubbleOutlineRoundedIcon />,
        title: 'Comment',
        color: 'grey',
    },
    {
        Icon: <NearMeRoundedIcon />,
        title: 'Share',
        color: 'grey',
    },
];

export default Post;
