import React from "react";
import EditProfileComponent from "./edit-profile-component";
import { useSelector } from "react-redux";

const EditProfile = () => {
    const profile = useSelector(state => state.profile)

    return (
        <EditProfileComponent profile={profile} />

    );
};
export default EditProfile;