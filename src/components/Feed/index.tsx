import './Feed.scss';

import React, { useEffect, useState } from 'react';

import Post from '../Post';
import StoryReel from '../StoryReel';

interface FeedProps {
    photoUrl?: string;
    username: string | null;
}
interface FeedProps {
    photoUrl?: string;
    username: string | null;
}
interface PostProps {
    id: number;
    profilePic: string;
    username: string;
    text?: string;
    timestamp: string;
    image?: string;
}

function Feed({ photoUrl, username }: FeedProps): React.ReactElement {
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        fetch('http://localhost:4001/posts')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            });
    }, []);

    return (
        <div className="feed">
            <StoryReel photoUrl={photoUrl} />
            {posts.map((post: PostProps) => (
                <Post
                    key={post.id}
                    username={post.username}
                    profilePic={post.profilePic}
                    text={post.text}
                    image={post.image}
                    timestamp={post.timestamp}
                />
            ))}
        </div>
    );
}

export default Feed;
