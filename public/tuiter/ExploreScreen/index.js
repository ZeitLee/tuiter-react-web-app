import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreScreen() {
    $('#wd-explore-screen').append(`
<div class="row mt-3">
    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar("Explore")}
    </div>
    <div class="col-10 col-lg-7 col-xl-6 border border-1 border-top-0 border-light">
        ${ExploreComponent()}
    </div>
    <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        ${WhoToFollowList()}
    </div>
</div>

   `);
}

$(exploreScreen);

$('#wd-explore-screen > #test').append(`<h> GOOD </h>`);

