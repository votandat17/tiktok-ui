import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faCircleDot, faCircleUp } from '@fortawesome/free-regular-svg-icons';

import styles from './SideBarSearchItems.module.scss';
import Button from '~/Components/Button/Button';

const cx = classNames.bind(styles);

function SideBarSearchItems({ data = [] }) {
    return (
        <ul className={cx('search-list')}>
            <div className={cx('guess-search-title')}>You may like</div>
            {data.map((item, index) => {
                return (
                    <li key={index} className={cx('list-item')}>
                        <Button searchItem>
                            {item.icon} {item.title}
                        </Button>
                    </li>
                );
            })}
        </ul>
    );
}

export default SideBarSearchItems;
