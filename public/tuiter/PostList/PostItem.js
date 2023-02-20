
const PostItem = (post) => {
    return (`
            <div class="row border border-1 border-light border-top-0 pt-3  ">
                <div class="col-2 col-xl-1 col-md-1 ps-2 pt-1">
                    <img src=${post.avatarIcon}
                        class="rounded-circle wd-image-size-avatar px-0">
                </div>

                <div class="col-10 col-xl-11 col-md-11 wd-text-color-white ps-4">
                        ${post.userName}
                        <i class="fas fa-circle-check"></i>
                        <span class="wd-text-color-posted px-1">@${post.handle} · ${post.time}</span>
                        <i class="fas fa-more wd-text-color-normal pt-2 float-end"></i>
                        <br />
                        ${post.summary}

                    <div>
                        <img src="${post.image}"
                            class="wd-rounded-corners-top border border-2 border-light mb-0 mt-3 wd-width-full"/>
                        <div class="wd-rounded-corners-bottom border border-2 border-light border-top-0 px-3 pt-2">
                            <div class="wd-font-size-15 wd-font-color-white pb-1">
                                <b>${post.topic}</b>
                            </div>
                            <p class="text-muted"><small>
                            ${post.title} </br>
                            <i class="fas fa-link-slash pe-2"></i> ${post.link}
                            </small></p>
                        </div>
                    </div>

                    <div class="row mt-3 text-muted pb-3">
                        <div class="col-3 text-truncate">
                            <a class="wd-remove-underline" href="#"><i class='far fa-comment'></i>
                                <span class="ps-3">${post.comments}</span></a>
                        </div>

                        <div class="col-3 text-truncate">
                            <a class="wd-remove-underline" href="#"><i
                                    class="fas fa-retweet"></i>
                                <span class="ps-3">${post.share}</span></a>
                        </div>

                        <div class="col-3 text-truncate">
                            <a class="wd-remove-underline" href="#"><i class="far fa-heart"></i>
                                <span class="ps-3">${post.like}</span></a>
                        </div>

                        <div class="col-3 text-truncate">
                            <a class="wd-remove-underline" href="#">
                            <i class="fas arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
`)
}

export default PostItem;