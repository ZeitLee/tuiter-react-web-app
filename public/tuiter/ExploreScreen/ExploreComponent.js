import PostSummaryList from "../PostSummaryList/index.js";
import SearchingBarAndGear from "./SearchingBar.js";
import MainPicture from "./MainPicture.js";
import NavigationsTabs from "./NavigationsTabs.js";

const ExploreComponent = () => {
    return (`
        <div>
            <!-- search bar and gear -->
            ${SearchingBarAndGear()}
            <!-- nav tabs -->
            ${NavigationsTabs()}
            <!-- main picture -->
            ${MainPicture()}
           <!-- image with overlaid text -->
           ${PostSummaryList()}
        </div>  
    `);
}

export default ExploreComponent;
