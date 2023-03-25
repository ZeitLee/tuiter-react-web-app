import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import "./index.css"

const Profile = (
    {
        profile = {
            firstName: "Default",
            lastName: "Name",
            handle: "@Zeit-Lee",
            profilePicture: "myAvatar.jpeg",
            bannerPicture: "banner.jpeg",
            bio: "Computer Science Major. Enjoying developing games and softwares. Meeting friends in the world.",
            website: "fake-website.com",
            location: "Boston, MA",
            dateOfBirth: "01/01/1993",
            dateJoined: "4/2009",
            followingCount: 340,
            followersCount: 223
        }
    },
) => {
    return (
        <div className="row mt-1 border">

            <div className="position-relative pt-2">
                <img src={`/images/${profile.bannerPicture}`} width="100%" />
                <img src={`/images/${profile.profilePicture}`}
                    className="rounded-circle px-0 position-absolute wd-corner" width={100} height={100} />
            </div>

            <div className="mt-5 pt-3">
                <b className="px-2 display-6">{profile.firstName} {profile.lastName}</b>
                <br />
                <small className="text-muted px-2">{profile.handle}</small>
            </div>

            <div className="text-muted ms-2 mt-2">
                <span className="text-muted">{profile.bio}</span>
            </div>

            <div className="row mt-3 text-muted pb-3">
                <div className="col-4 text-truncate ps-4">
                    <FontAwesomeIcon icon={faLocation} />
                    <span className="ps-2">{profile.location}</span>
                </div>

                <div className="col-4 text-truncate ps-4">
                    <FontAwesomeIcon icon={faCakeCandles} />
                    <span className="ps-2">Born {profile.dateOfBirth}</span>
                </div>

                <div className="col-4 text-truncate ps-4">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className="ps-2">Joined {profile.dateJoined}</span>
                </div>
            </div>

            <div className="mt-3 text-black pb-3">
                <b className="ps-2">{profile.followingCount}</b><span className="text-muted ps-2">Following</span>
                <b className="ps-3">{profile.followersCount}</b><span className="text-muted ps-2">Followers</span>
            </div>
        </div >

    );
};

export default Profile;