import { Route, Routes, Link } from 'react-router-dom';

function SideBar() {
    return (
        <div>
            <div>Tiktok</div>
            <div className="search">
                <input className="search-btn" type="text" placeholder="Search" />
            </div>
            <div>Explore</div>
            <div>Following</div>
            <div>Friends</div>
            <div>Upload</div>
            <div>Activity</div>
            <div>Message</div>
            <div>Live</div>
            <div>Profile</div>
            <div>More</div>
        </div>
    );
}

export default SideBar;
