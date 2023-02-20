
const PostSummaryItem = (post) => {
    return (`
            <li class="list-group-item">
                <div class="row py-1">
                    <div class="col-10 col-xl-9 col-lg-8 col-sm-8 wd-text-color-white">
                            <span class="wd-text-color-posted">${post.topic}</span><br />
                            <b>${post.userName}</b>
                            <i class="fas fa-circle-check"></i>
                            <span class="wd-text-color-posted px-1">- ${post.time}</span><br />
                            <b>${post.title}</b>
                    </div>

                    <div class="col-2 col-xl-3 col-lg-4 col-sm-4">
                        <img src="${post.image}"
                            class="wd-image-size-posted wd-rounded-corners-posted-picture float-end">
                    </div>
                </div>
            </li>
`)
}

export default PostSummaryItem;