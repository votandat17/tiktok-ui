import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot, faCircleUp } from '@fortawesome/free-regular-svg-icons';

import styles from './SideBarSearch.module.scss';
import SideBarSearchItems from './SideBarSearchItems/SideBarSearchItems';

const cx = classNames.bind(styles);

const SEARCH_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faCircleDot} />,
        title: 'Sơn Tùng MTP',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleUp} />,
        title: 'Mono',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleUp} />,
        title: 'lyric nhạc',
    },
];

function SideBarSearch() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-container')}>
                <div className={cx('search-header')}>
                    <h2 className={cx('search-title')}>
                        Search
                        <button className={cx('close-btn')}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </h2>
                </div>
                <div className={cx('search-form-container')}>
                    <form className={cx('search-input')}>
                        <input type="text" placeholder="Search" className={cx('input-element')} />
                    </form>
                </div>
            </div>
            <SideBarSearchItems data={SEARCH_ITEMS} />
        </div>
    );
}

export default SideBarSearch;
