const SearchingBarAndGear = () => {
    return (`
            <div class="row mt-3 mb-2 align-items-center">
                <div class="col-11 position-relative ps-4">
                    <form id="search-tuiter">
                        <input
                            class="border-0 wd-rounded-corners-all-around wd-padding-top-bottom-lg wd-padding-left-lg wd-width-full wd-bg-color-search"
                            placeholder="Search Tuiter" />
                        <i class="fas fa-magnifying-glass wd-pos-abs-magnifying fa-lg wd-text-color-normal"></i>
                    </form>
                </div>

                <!-- Gear icon -->
                <div class="col-1">
                    <a href="explore-settings.html">
                        <i class="fa fa-gear fa-lg wd-text-color-normal float-end"></i>
                    </a>
                </div>

            </div>
`)
}

export default SearchingBarAndGear;