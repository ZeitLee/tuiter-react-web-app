import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHashtag, faFlask, faBell, faMessage, faBookmark, faList, faUser, faEllipsis, faT } from '@fortawesome/free-solid-svg-icons';

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item text-primary"><b><FontAwesomeIcon icon={faT} /><span className="ps-1 d-none d-xl-inline">Tuiter</span></b></a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faHouse} />
                <span className="ps-1 d-none d-xl-inline">
                    Home
                </span>

            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faHashtag} />
                <span className="ps-1 d-none d-xl-inline">
                    Explore
                </span>

            </Link>
            <Link to="/" className="list-group-item">
                <FontAwesomeIcon icon={faFlask} />
                <span className="ps-1 d-none d-xl-inline">
                    Labs
                </span>

            </Link>

            <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faBell} />
                <span className="ps-1 d-none d-xl-inline">
                    Notifications
                </span>

            </a>
            <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faMessage} />
                <span className="ps-1 d-none d-xl-inline">
                    Messages
                </span>

            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faBookmark} />
                <span className="ps-1 d-none d-xl-inline">
                    Bookmarks
                </span>

            </a>
            <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faList} />
                <span className="ps-1 d-none d-xl-inline">
                    Lists
                </span>

            </a>
            <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faUser} />
                <span className="ps-1 d-none d-xl-inline">
                    Profile
                </span>

            </a>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faEllipsis} />
                <span className="ps-1 d-none d-xl-inline">
                    More
                </span>

            </a>
        </div>
    );
};

export default NavigationSidebar;