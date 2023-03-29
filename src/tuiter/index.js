import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/index.js"
import ExploreComponent from "./explore/index.js"
import { Routes, Route } from "react-router";
import whoReducer from "./reducers/who-reducer.js";
import profileReducer from "./reducers/profile-reducer.js";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import HomeComponent from "./home";
import ProfileComponent from "./profile"
import EditProfile from "./edit-profile"

const store = configureStore(
    { reducer: { who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer } });


function Tuiter() {
    return (
        <Provider store={store}>
            <>
                <Nav />
                <div className="row mt-2 mb-3">
                    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                        <NavigationSidebar active="explore" />
                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                        style={{ "position": "relative" }}>
                        <Routes>
                            <Route path="home" element={<HomeComponent />} />
                            <Route path="explore" element={<ExploreComponent />} />
                            <Route path="profile" element={<ProfileComponent />} />
                            <Route path="edit-profile" element={<EditProfile />} />
                        </Routes>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList />
                        {/* <Routes>
                            <Route path="home" element={<WhoToFollowList />} />
                            <Route path="explore" element={<WhoToFollowList />} />
                        </Routes> */}

                    </div>
                </div>
            </>
        </Provider>



    );
}
export default Tuiter