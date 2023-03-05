import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEllipsis, faHeart, faArrowUpFromBracket, faRetweet, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import "./index.css"

const PostItem = (
    {
        post = {
            "avatarIcon": "space-X.jpeg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "summary": "Amazing show about Inspiration4X mission!",
            "image": "starship.jpg",
            "topic": "Countdown: Inspiration4 Mission to Space.",
            "title": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space.",
            "link": "Netfilx.com",
            "comments": "4.2K",
            "share": "3.5K",
            "like": "37.5K"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row border border-1 border-light border-top-0 pt-3">
                <div className="col-2 col-xl-1 col-md-1 ps-2 pt-1">
                    <img src={`/images/${post.avatarIcon}`}
                        className="rounded-circle px-0" height="48px" width="48px" />
                </div>

                <div className="col-10 col-xl-11 col-md-11 text-black ps-4">
                    <b>{post.userName}</b>
                    <FontAwesomeIcon icon={faCircleCheck} className="ps-1" />
                    <span className="text-muted px-2">@{post.handle} · {post.time}</span>
                    <FontAwesomeIcon icon={faEllipsis} className="text-muted float-end" />
                    < br />
                    {post.summary}

                    <div>
                        <img src={`/images/${post.image}`}
                            className="rounded-top border border-2 border-light mb-0 mt-3" width="100%" />
                        <div className="rounded-bottom border border-2 border-light border-top-0 px-3 pt-2">
                            <div className="text-black pb-1">
                                <b>{post.topic}</b>
                            </div>
                            <div>
                                <p className="text-muted"><small>
                                    {post.title} </small> </p>
                            </div>
                            <div>
                                <p className="text-muted"><small>
                                    <FontAwesomeIcon icon={faLinkSlash} /> {post.link}
                                </small>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="row mt-3 text-muted pb-3">
                        <div className="col-3 text-truncate">
                            <a className="wd-remove-underline" href="#">
                                <FontAwesomeIcon icon={faComment} />
                                <span className="ps-2">{post.comments}</span></a>
                        </div>

                        <div className="col-3 text-truncate">
                            <a className="wd-remove-underline" href="#">
                                <FontAwesomeIcon icon={faRetweet} />
                                <span className="ps-2">{post.share}</span></a>
                        </div>

                        <div className="col-3 text-truncate">
                            <a className="wd-remove-underline" href="#">
                                <FontAwesomeIcon icon={faHeart} className="wd-color-pink" />
                                <span className="ps-2">{post.like}</span></a>
                        </div>

                        <div className="col-3 text-truncate">
                            <a className="wd-remove-underline" href="#">
                                <FontAwesomeIcon icon={faArrowUpFromBracket} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </li >
    );
};

export default PostItem;