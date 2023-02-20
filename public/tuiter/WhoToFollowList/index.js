import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
       <ul class="list-group">

        <li class="list-group-item contsie wd-font-size-icons-m wd-rounded-top-20 ">
        <b>Who to follow</b></li>
       
        ${who.map(who => {
        return (WhoToFollowListItem(who));
    }).join('')}

        <li class="list-group-item wd-rounded-bottom-20">
            <span class="wd-text-color-highlight">Show more</span>
        </li>
       </ul>
   `);
}

export default WhoToFollowList;

$('#wd-follows-siderbar').append(`${WhoToFollowList()}`);