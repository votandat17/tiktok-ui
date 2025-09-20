import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faCompass, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faEllipsis,
    faGrip,
    faSearch,
    faTv,
    faUpload,
    faUserGroup,
    faUserPlus,
    faHouse,
} from '@fortawesome/free-solid-svg-icons';

import styles from './SideBar.module.scss';
import Button from '~/Components/Button/Button';

const cx = classNames.bind(styles);

const SIDEBAR_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faHouse} />,
        title: 'For You',
        to: '/',
    },
    {
        icon: <FontAwesomeIcon icon={faCompass} />,
        title: 'Explore',
        to: '/explore',
    },
    {
        icon: <FontAwesomeIcon icon={faUserPlus} />,
        title: 'Following',
        to: '/following',
    },
    {
        icon: <FontAwesomeIcon icon={faUpload} />,
        title: 'Upload',
        to: '/upload',
    },
    {
        icon: <FontAwesomeIcon icon={faTv} />,
        title: 'LIVE',
        to: '/live',
    },
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Profile',
        to: '/profile',
    },
];

function SidebarItems() {
    const renderItems = () => {
        return SIDEBAR_ITEMS.map((item, index) => {
            return (
                <div className={cx('sidebar-item')} key={index}>
                    <Button to={item.to} className={cx('sidebar')} leftIcon={item.icon}>
                        {item.title}
                    </Button>
                </div>
            );
        });
    };
    return renderItems();
}

export default SidebarItems;
