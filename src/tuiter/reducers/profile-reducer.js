import { createSlice } from "@reduxjs/toolkit";
import profileData from "../data/profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileData,
    reducers: {
        updateFirstName(state, action) {
            state.firstName = action.payload.firstName;
        },
        updateLastName(state, action) {
            state.lastName = action.payload.lastName;
        },
        updateHandle(state, action) {
            state.handle = action.payload.handle;
        },
        updateBio(state, action) {
            state.bio = action.payload.bio;
        },
        updateLocation(state, action) {
            state.location = action.payload.location;
        },
        updateWebsite(state, action) {
            state.website = action.payload.website;
        },
        updateBirth(state, action) {
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const {
    updateFirstName,
    updateLastName,
    updateHandle,
    updateBio,
    updateLocation,
    updateWebsite,
    updateBirth,

} = profileSlice.actions
export default profileSlice.reducer;