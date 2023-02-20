const NavigationsTabs = () => {
    return (`
            <div class="row mb-2">
                <ul class="nav nav-tabs pt-2">
                    <li class="nav-item ms-1 px-2">
                        <a class="nav-link active" href="for-you.html">
                            <span class="pb-3">
                                For you
                            </span>
                        </a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link" href="trending.html">
                            <span class="">
                                Trending
                            </span>
                        </a>
                    </li>
                    <li class=" nav-item px-2">
                        <a class="nav-link" href="news.html">
                            <span class="">
                                News
                            </span></a>
                    </li>
                    <li class=" nav-item px-2">
                        <a class="nav-link" href="sports.html">
                            <span class="">
                                Sports
                            </span></a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link d-none d-md-block" href="entertainment.html">
                            <span class="">
                                Entertainment
                            </span></a>
                    </li>
                </ul>
            </div>
`)
}

export default NavigationsTabs;