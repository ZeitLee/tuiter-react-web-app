import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "username": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row py-1 align-items-center" >
                <div className="col-9 col-xl-9 col-lg-9 col-md-9 col-sm-8">
                    <div className="text-muted">{post.username} · {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div className="text-muted">{post.title}</div>
                </div>
                <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 ">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} />
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;