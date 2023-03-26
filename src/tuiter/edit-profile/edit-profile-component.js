import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFirstName, updateLastName, updateHandle, updateBio, updateLocation, updateBirth, updateWebsite } from "../reducers/profile-reducer";
import "./index.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    const [newFirstName, setFirstName] = useState({ firstName: profile.firstName });
    const [newLastName, setLastName] = useState({ lastName: profile.lastName });
    const [newHandle, setHandle] = useState({ handle: profile.handle });
    const [newBio, setBio] = useState({ bio: profile.bio });
    const [newLocation, setLocation] = useState({ location: profile.location });
    const [newWebsite, setWebsite] = useState({ website: profile.website });
    const [newBirth, setBirth] = useState({ dateOfBirth: profile.dateOfBirth });

    const profileFirstNameChangeHandler = (event) => {
        const firstnameValue = event.target.value;
        const newFirstName = {
            firstName: firstnameValue
        };
        setFirstName(newFirstName);
        setHandle({ handle: `${newFirstName.firstName}-${newLastName.lastName}` });
    }

    const profileLastNameChangeHandler = (event) => {
        const lastnameValue = event.target.value;
        const newLastName = {
            lastName: lastnameValue
        };
        setLastName(newLastName);
        setHandle({ handle: `${newFirstName.firstName}-${newLastName.lastName}` });
    }

    const profileBioChangeHandler = (event) => {
        const bioValue = event.target.value;
        const newBio = {
            bio: bioValue
        };
        setBio(newBio);
    }

    const profileLocationChangeHandler = (event) => {
        const locationValue = event.target.value;
        const newLocation = {
            location: locationValue
        };
        setLocation(newLocation);
    }

    const profileWebsiteChangeHandler = (event) => {
        const websiteValue = event.target.value;
        const newWebsite = {
            website: websiteValue
        };
        setWebsite(newWebsite);
    }

    const profileBirthChangeHandler = (event) => {
        const birthValue = event.target.value;
        const newBirth = {
            dateOfBirth: birthValue
        };
        setBirth(newBirth);
    }

    const dispatch = useDispatch();
    const saveProfileClickHandler = () => {
        dispatch(updateFirstName(newFirstName));
        dispatch(updateLastName(newLastName));
        dispatch(updateHandle(newHandle))
        dispatch(updateBio(newBio))
        dispatch(updateLocation(newLocation))
        dispatch(updateWebsite(newWebsite))
        dispatch(updateBirth(newBirth))
    }

    return (
        <>
            <div className="mt-2 py-2">
                <Link to="/tuiter/profile">
                    <FontAwesomeIcon icon={faXmark} size="xl" fixedWidth color="gray" className="pt-1" />
                </Link>
                <b className="ps-3">Edit Profile</b>
                <div className="float-end">
                    <Link to="/tuiter/profile">
                        <button onClick={saveProfileClickHandler} className="rounded-pill btn btn-dark py-1">Save</button>
                    </Link>
                </div>
            </div>

            <div className="position-relative mt-2">
                <img src={`/images/${profile.bannerPicture}`} width="100%" />
                <img src={`/images/${profile.profilePicture}`}
                    className="rounded-circle px-0 position-absolute wd-left-bottom border border-3" width={100} height={100} />
            </div>

            <div className="mt-5 pt-4 ps-4 position-relative">
                <input placeholder="Please input your firstname."
                    onChange={profileFirstNameChangeHandler}
                    defaultValue={profile.firstName}
                    className="form-control rounded pt-4 " />
                <span className="position-absolute wd-input-hint text-muted">Firstname</span>
            </div>

            <div className="pt-4 ps-4 position-relative">
                <input placeholder="Please input your lastname."
                    onChange={profileLastNameChangeHandler}
                    defaultValue={profile.lastName}
                    className="form-control rounded pt-4 " />
                <span className="position-absolute wd-input-hint text-muted">Lastname</span>
            </div>

            <div className="pt-4 ps-4 position-relative">
                <textarea
                    onChange={profileBioChangeHandler}
                    defaultValue={profile.bio}
                    className="form-control rounded pt-4 " />
                <span className="position-absolute wd-input-hint text-muted">Bio</span>
            </div>

            <div className="pt-4 ps-4 position-relative">
                <input
                    onChange={profileLocationChangeHandler}
                    defaultValue={profile.location}
                    className="form-control rounded pt-4 " />
                <span className="position-absolute wd-input-hint text-muted">Location</span>
            </div>

            <div className="pt-4 ps-4">
                <input
                    onChange={profileWebsiteChangeHandler}
                    defaultValue={profile.website}
                    placeholder="Website"
                    className="form-control rounded py-3" />
            </div>

            {/* <div className="pt-4 ps-4 position-relative">
                <input
                    onChange={profileBirthChangeHandler}
                    defaultValue={profile.dateOfBirth}
                    className="form-control rounded pt-4 " />
                <span className="position-absolute wd-input-hint text-muted">Birth Date</span>
            </div> */}

            <div className="pt-4 ps-4 position-relative">
                <input
                    onChange={profileBirthChangeHandler}
                    type="date"
                    defaultValue={profile.dateOfBirth}
                    className="form-control rounded pt-4 " />
                <span className="position-absolute wd-input-hint text-muted">Birth Date</span>
            </div>
        </>
    );
};
export default EditProfileComponent;