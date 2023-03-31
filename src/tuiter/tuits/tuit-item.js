import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import TuitStats from "./tuit-stats.js"
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "username": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "spacex.png",
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="row mt-1">
                <div className="col-2 col-xl-1 col-md-1 ps-2 pt-1">
                    <img src={`/images/${tuit.image}`}
                        className="rounded-circle px-0" height="48px" width="48px" />
                </div>

                <div className="col-10 col-xl-11 col-md-11 text-black ps-4">

                    <b>{tuit.username}</b>
                    <FontAwesomeIcon icon={faCircleCheck} className="ps-1" />
                    <span className="text-muted px-2">{tuit.handle} · {tuit.time}</span>
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(tuit._id)}></i>

                    <div>
                        <div className="pt-1">
                            <div>
                                <p className="text-muted"><small>
                                    {tuit.tuit} </small> </p>
                            </div>
                        </div>
                    </div>

                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </li >
    );
};

export default TuitItem;