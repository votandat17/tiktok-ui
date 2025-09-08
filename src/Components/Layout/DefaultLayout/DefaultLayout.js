import Header from './Header/Header.js';
import SideBar from './SideBar/SideBar.js';

function DefaultLayout({ children }) {
    return (
        <div>
            <SideBar />
            <div className="content">{children}</div>
            <div>
                <Header />
                <div className="navigation">
                    <nav></nav>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
