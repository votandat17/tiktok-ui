import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Button from '~/Components/Button/Button';
import style from './Header.module.scss';
import { faCoins, faDownload, faMobileAndroid, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Header() {
    return (
        <div className={cx('Fixed-Top-Container')}>
            <div className={cx('flex-container-header')}>
                <Button normal>
                    <FontAwesomeIcon icon={faCoins} />
                    Get Coins
                </Button>
                <Button normal>
                    <FontAwesomeIcon icon={faMobileScreen} />
                    Get App
                </Button>
                <Button normal>
                    <FontAwesomeIcon icon={faDownload} />
                    PC App
                </Button>
                <div className={cx('VerticalDivider')}></div>
                <Button primary>Log in</Button>
            </div>
        </div>
    );
}

export default Header;

{
    /* <svg
                        fill="currentColor"
                        color="inherit"
                        font-size="16"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                    >
                        <path d="M28.68 11.5h-4.1v16.39a3.51 3.51 0 1 1-2.34-3.31v-4.21a7.61 7.61 0 1 0 6.44 7.52v-8.34a9.9 9.9 0 0 0 5.86 1.9v-4.1a5.85 5.85 0 0 1-5.86-5.85Z"></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24 2a22 22 0 1 0 0 44 22 22 0 0 0 0-44ZM6 24a18 18 0 1 1 36 0 18 18 0 0 1-36 0Z"
                        ></path>
                    </svg> */
}
