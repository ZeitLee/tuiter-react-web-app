import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowUpFromBracket, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import "./index.css"
import { useDispatch } from "react-redux";
import { clickLikes } from "./tuits-reducer"

const TuitStats = (
    {
        _id = 123,
        replies = 123,
        retuits = 234,
        likes = 2345,
        liked = true
    },
) => {
    let likeSection = <a className="wd-color-pink wd-remove-underline"  >
        <FontAwesomeIcon icon={faHeart} className="wd-color-pink" />
        <span className="ps-2">{likes}</span></a >
    if (!liked) {
        likeSection = <a className="wd-remove-underline">
            <FontAwesomeIcon icon={farHeart} />
            <span id="non-liked-icon" className="ps-2">{likes}</span></a>
    }

    const dispatch = useDispatch();
    const clickLikesHandler = (id) => {
        dispatch(clickLikes(id));
    }

    return (
        <div className="row mt-3 text-muted pb-3">
            <div className="col-3 text-truncate">
                <a className="wd-remove-underline" href="#">
                    <FontAwesomeIcon icon={faComment} />
                    <span className="ps-2">{replies}</span></a>
            </div>

            <div className="col-3 text-truncate">
                <a className="wd-remove-underline" href="#">
                    <FontAwesomeIcon icon={faRetweet} />
                    <span className="ps-2">{retuits}</span></a>
            </div>

            <div className="col-3 text-truncate">
                <span onClick={() => clickLikesHandler(_id)} className="">
                    {likeSection}
                </span>
            </div>

            <div className="col-3 text-truncate">
                <a className="wd-remove-underline" href="#">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} /></a>
            </div>
        </div>
    );
};

const addLike = (likes) => {
    let p = document.getElementById("non-liked-icon");
    console.log(p);
    p = p + 1;
    likes = p;
};

const cancelLike = () => {
    console.log("Do");
};

export default TuitStats;