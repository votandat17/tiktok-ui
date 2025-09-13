import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot, faCircleUp } from '@fortawesome/free-regular-svg-icons';

import styles from './SideBarSearch.module.scss';

const cx = classNames.bind(styles);

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
            <ul className={cx('search-list')}>
                <div className={cx('guess-search-title')}>You may like</div>
                <li className={cx('list-item')}>
                    <div className={cx('item-icon')}>
                        <FontAwesomeIcon icon={faCircleDot} />
                    </div>
                    <h4 className={cx('item-text')}>Son Tung MTP</h4>
                </li>
                <li className={cx('list-item')}>
                    <div className={cx('item-icon')}>
                        <FontAwesomeIcon icon={faCircleUp} />
                    </div>
                    <h4 className={cx('item-text')}>Mono</h4>
                </li>
                <li className={cx('list-item')}>
                    <div className={cx('item-icon')}>
                        <FontAwesomeIcon icon={faCircleUp} />
                    </div>
                    <h4 className={cx('item-text')}>lyric nhạc</h4>
                </li>
            </ul>
        </div>
    );
}

export default SideBarSearch;
