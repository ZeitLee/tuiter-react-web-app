import { createSlice } from "@reduxjs/toolkit";
import profileData from "../data/profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileData
});

export default profileSlice.reducer;