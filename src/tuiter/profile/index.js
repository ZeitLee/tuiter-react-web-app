import React from "react";
import Profile from "./profile-component";
import { useSelector } from "react-redux";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)

    console.log(profile);

    return (
        <Profile profile={profile} />

    );
};
export default ProfileComponent;