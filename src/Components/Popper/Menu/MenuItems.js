import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Button from '~/Components/Button/Button';
import styles from './Menu.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuItems({ data = [] }) {
    return (
        <div className={cx('menu-wrapper')}>
            <div className={cx('menu-header')}>
                <h2 className={cx('menu-header-title')}>More</h2>
            </div>

            <div className={cx('more-container')}>
                <ul className={cx('more-list')}>
                    {data.map((item, index) => {
                        return (
                            <li key={index} className={cx('more-item')}>
                                <Button to={item.to} className={cx('moreitem')} moreItems rightIcon={item.icon}>
                                    {item.title}
                                </Button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={cx('close-wrapper')}>
                <Button className={cx('back-btn')} onClick={() => alert('adu')}>
                    <FontAwesomeIcon icon={faXmark} />
                </Button>
            </div>
        </div>
    );
}

export default MenuItems;
