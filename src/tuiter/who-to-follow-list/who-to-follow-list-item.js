import React from "react";

const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'javascript.png' }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} />
                </div>
                <div className="col-6 col-xxl-7 col-xl-6">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-4 col-xxl-3 col-xl-4">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;