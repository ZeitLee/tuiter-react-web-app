const NavigationSidebar = (active) => {
    let isHomeActive = '';
    let isExpolreActive = '';
    let isNotification = '';
    let isMessage = '';
    let isBookmark = '';
    let lists = '';
    let profile = '';
    let more = '';

    if (active === `Home`) {
        isHomeActive = 'active';
    } else if (active === 'Explore') {
        isExpolreActive = 'active';
    } else if (active === 'Notification') {
        isNotification = 'active';
    } else if (active === 'Message') {
        isMessage = 'active';
    } else if (active === 'Bookmarks') {
        isBookmark = 'active';
    } else if (active === 'Lists') {
        lists = 'active';
    } else if (active === 'Profile') {
        profile = 'active';
    } else {
        more = 'active';
    }

    return (`
   <div class="list-group">
        <a href="#" class="list-group-item py-3"><i
                class="fa fa-text-height fa-2x wd-text-color-highlight"></i></a>
                
        <a id="home" href="../HomeScreen/index.html" class="list-group-item d-flex justify-content-between align-items-center ${isHomeActive}">
            <i class="fas fa-house wd-font-size-icons-m py-2"></i>
            <span class="wd-pos-nav-text d-none d-xl-inline ">Home</span>
        </a>

        <a id="explore" href="../ExploreScreen/index.html" class="list-group-item d-flex justify-content-between align-items-center ${isExpolreActive}">
            <i class="fa fa-hashtag wd-font-size-icons-m py-2 "></i>
            <span class="wd-pos-nav-text d-none d-xl-inline">Explore</span>
        </a>
        <a href="#" class="list-group-item d-flex justify-content-between align-items-center ${isNotification}">
            <i class="fa fa-bell wd-font-size-icons-m py-2"></i>
            <span class="wd-pos-nav-text d-none d-xl-inline">Notifications</span>
        </a>

        <a href="#" class="list-group-item d-flex justify-content-between align-items-center ${isMessage}">
            <i class="fa fa-envelope wd-font-size-icons-m py-2"></i>
            <span class="wd-pos-nav-text  d-none d-xl-inline">Messages</span>
        </a>
        <a href="#" class="list-group-item d-flex justify-content-between align-items-center ${isBookmark}">
            <i class="fa fa-bookmark wd-font-size-icons-m py-2"></i>
            <span class="wd-pos-nav-text  d-none d-xl-inline">Bookmarks</span>
        </a>
        <a href="#" class="list-group-item d-flex justify-content-between align-items-center ${lists}">
            <i class="fa fa-list wd-font-size-icons-m py-2"></i>
            <span class="wd-pos-nav-text  d-none d-xl-inline">Lists</span>
        </a>
        <a href="#" class="list-group-item d-flex justify-content-between align-items-center ${profile}">
            <i class="fa fa-user wd-font-size-icons-m py-2"></i>
            <span class="wd-pos-nav-text d-none d-xl-inline">Profile</span>
        </a>
        <a href="#" class="list-group-item d-flex justify-content-between align-items-center ${more}">
            <i class="fas fa-more wd-font-size-icons-m py-2"></i>
            <span class="wd-pos-nav-text d-none d-xl-inline">More</span>
                </a>
   </div>
   
    <button class="btn btn-primary override-tuit mt-3">Tuit</button>
 `);
}

export default NavigationSidebar;

function naviComponent() {
    $('#wd-navigation-siderbar').append(`${NavigationSidebar()}`);
}

$(naviComponent);