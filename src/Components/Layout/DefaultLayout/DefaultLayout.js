import classNames from 'classnames/bind.js';

import Header from './Header/Header.js';
import SideBar from './SideBar/SideBar.js';
import style from './DefaultLayout.module.scss';
import Navigation from './Navigation/Navigation.js';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <SideBar />
            <div className={cx('main-content')}>
                <div className={cx('container')}>
                    <div className={cx('content')}>{children}</div>
                </div>
                <div className={cx('header-nav')}>
                    <Header />
                    <div className={cx('navigation')}>
                        <Navigation />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
