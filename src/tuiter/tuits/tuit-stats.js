import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowUpFromBracket, faRetweet, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import "./index.css"
import { useDispatch } from "react-redux";
import { clickLikes } from "./tuits-reducer"
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "tesla.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 123,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    },
) => {
    const dispatch = useDispatch();
    const clickLikesHandler = () => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1,
            liked: true
        }));
    }

    const clicDislikesHandler = () => {
        dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1
        }));
    }


    let likeSection = <a className="wd-color-pink wd-remove-underline" onClick={clickLikesHandler}>
        <FontAwesomeIcon icon={faHeart} className="wd-color-pink" />
        <span className="ps-2">{tuit.likes}</span></a >
    if (!tuit.liked) {
        likeSection = <a className="wd-remove-underline" onClick={clickLikesHandler}>
            <FontAwesomeIcon icon={farHeart} />
            <span id="non-liked-icon" className="ps-2">{tuit.likes}</span></a>
    }



    return (
        <div className="row mt-3 text-muted pb-3">
            <div className="col-2 text-truncate">
                <a className="wd-remove-underline" href="#">
                    <FontAwesomeIcon icon={faComment} />
                    <span className="ps-2">{tuit.replies}</span></a>
            </div>

            <div className="col-2 text-truncate">
                <a className="wd-remove-underline" href="#">
                    <FontAwesomeIcon icon={faRetweet} />
                    <span className="ps-2">{tuit.retuits}</span></a>
            </div>

            <div className="col-2 text-truncate">
                {likeSection}
            </div>

            <div className="col-2 text-truncate">
                <div>
                    <FontAwesomeIcon icon={faThumbsDown} onClick={clicDislikesHandler} className="me-2" />
                    {tuit.dislikes}
                </div>
            </div>

            <div className="col-1 text-truncate">
                <a className="wd-remove-underline" href="#">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} /></a>
            </div>
        </div >
    );
};

export default TuitStats;