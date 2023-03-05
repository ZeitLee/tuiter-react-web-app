import React from "react";
import postsArray from './posts.json';
import PostItem from "./post-item.js"

const HomeComponent = () => {
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem
                        key={post._id} post={post} />)
            }
        </ul>
    );
};
export default HomeComponent;