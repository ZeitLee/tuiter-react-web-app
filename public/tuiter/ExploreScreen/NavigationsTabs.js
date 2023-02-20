const NavigationsTabs = () => {
    return (`
            <div class="row mb-2">
                <ul class="nav nav-fill wd-font-bold py-2">
                    <li class="nav-item ">
                        <a class="nav-link active" href="for-you.html">
                            <span class="wd-border-bottom-5 wd-border-color-highlight pb-3">
                                For you
                            </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">
                            <span class="wd-text-color-normal">
                                Trending
                            </span>
                        </a>
                    </li>
                    <li class=" nav-item">
                        <a class="nav-link" href="news.html">
                            <span class="wd-text-color-normal">
                                News
                            </span></a>
                    </li>
                    <li class=" nav-item">
                        <a class="nav-link" href="sports.html">
                            <span class="wd-text-color-normal">
                                Sports
                            </span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-none d-md-block" href="entertainment.html">
                            <span class="wd-text-color-normal">
                                Entertainment
                            </span></a>
                    </li>
                </ul>
            </div>
`)
}

export default NavigationsTabs;