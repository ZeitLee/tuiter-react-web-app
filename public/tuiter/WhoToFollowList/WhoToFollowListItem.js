
const WhoToFollowListItem = (who) => {
    return (`<li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-2 col-xxl-2 col-xl-2">
                        <img src="../../images/${who.avatarIcon}"
                            class="wd-rounded-corners-circle wd-image-size-follow">
                    </div>
                    <div class="col-6 col-xxl-7 col-xl-6">
                        <div class="text-truncate"><b>${who.userName}</b><i class=" fas fa-circle-check wd-padding-left-2"></i>
                        </div>
                        <div class="wd-text-color-normal">@${who.handle}</div>
                    </div>
                    <div class="col-4 col-xxl-3 col-xl-4">
                        <button class="btn btn-primary override-follow">
                            Follow
                        </button>
                    </div>
                </div>
            </li>
`)
}

export default WhoToFollowListItem;