import React from "react";
import postsArray from './posts.json';
import PostItem from "./post-item.js"

const HomeComponent = () => {
    const retuitedTitle = <div></div>;
    if (postsArray.isRetuited) {
        retuitedTitle = <div>Hello</div>;
    }

    return (
        <ul className="list-group">
            {retuitedTitle}
            {
                postsArray.map(post =>
                    <PostItem
                        key={post._id} post={post} />)
            }
        </ul>
    );
};
export default HomeComponent;