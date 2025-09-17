import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import classNames from 'classnames/bind';
import { faXmark, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Button from '~/Components/Button/Button';
import styles from './MoreOptions.module.scss';

const cx = classNames.bind(styles);

// const MORE_ITEMS = [
//     {
//         title: 'TikTok Studio',
//     },
//     {
//         title: 'Create TikTok effects',
//     },
//     {
//         title: 'Sell on TikTok Shop',
//     },
//     {
//         title: 'Growth tools',
//     },
//     {
//         title: 'English',
//     },
//     {
//         title: 'Theme',
//     },
//     {
//         title: 'Feedback and help',
//     },
// ];
function MoreOptions() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('More-Container')}>
                <div className={cx('more-header')}>
                    <h2 className={cx('more-text')}>More</h2>
                </div>

                <ul className={cx('more-list')}>
                    <li className={cx('more-item')}>
                        <Button moreItems>TikTok Studio</Button>
                    </li>
                    <li className={cx('more-item')}>
                        <Button moreItems>Create TikTok effects</Button>
                    </li>
                    <li className={cx('more-item')}>
                        <Button moreItems>Sell on TikTok Shop</Button>
                    </li>
                    <li className={cx('more-item')}>
                        <Button moreItems>
                            Growth tools
                            <FontAwesomeIcon icon={faCaretRight} />
                        </Button>
                    </li>
                    <li className={cx('more-item')}>
                        <Button moreItems>
                            English <FontAwesomeIcon icon={faCaretRight} />
                        </Button>
                    </li>
                    <li className={cx('more-item')}>
                        <Button moreItems>
                            Dark mode <FontAwesomeIcon icon={faCaretRight} />
                        </Button>
                    </li>
                    <li className={cx('more-item')}>
                        <Button moreItems>Feedback and help</Button>
                    </li>
                </ul>

                <div className={cx('more-close-btn')}>
                    <Button circles>
                        <FontAwesomeIcon icon={faXmark} />
                    </Button>
                </div>
                {/* <div className={cx('more-close-btn')}>
                    <FontAwesomeIcon icon={faXmark} />
                </div> */}
            </div>
        </div>
    );
}

export default MoreOptions;
