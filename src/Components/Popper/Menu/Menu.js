import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Menu.module.scss';
import MenuItems from './MenuItems';
import { Popper as PopperWrapper } from '~/Components/Popper';

const cx = classNames.bind(styles);

const MENU_CHILD = [
    {
        title: 'TikTok Studios',
        icon: null,
        to: '/tiktokstudio',
    },
    {
        title: 'Create TikTok effects',
        icon: null,
        to: '/effecthousetiktok',
    },
    {
        title: 'Sell on TikTok Shop',
        icon: null,
        to: '/sell-ontiktok',
    },
    {
        title: 'Growth tools',
        icon: <FontAwesomeIcon icon={faChevronRight} />,
        children: {
            title: 'Growth tools',
            children: [
                {
                    code: 'en',
                    title: 'LIVE Shopping',
                },
                {
                    code: 'vi',
                    title: 'LIVE Creator Hub',
                },
            ],
        },
    },
    {
        title: 'Language',
        icon: <FontAwesomeIcon icon={faChevronRight} />,
        children: {
            title: 'Language',
            children: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        title: 'Theme',
        icon: <FontAwesomeIcon icon={faChevronRight} />,
        children: {
            title: 'Theme',
            children: [
                {
                    code: 'auto',
                    title: 'Automatic',
                },
                {
                    code: 'dark',
                    title: 'Dark mode',
                },
                {
                    code: 'light',
                    title: 'Light mode',
                    icon: <FontAwesomeIcon icon={faCheck} />,
                },
            ],
        },
    },
    {
        title: 'Feedback & help',
        icon: null,
        to: '/feedback',
    },
];

function Menu({ children }) {
    const [visible, useVisible] = React.useState(false);
    const Hide = () => useVisible(false);
    const Show = () => useVisible(true);

    return (
        <div>
            <Tippy
                render={(attrs) => (
                    <div className={cx('more-box')} tabIndex="-1" {...attrs}>
                        <PopperWrapper moreOption>
                            <MenuItems data={MENU_CHILD} />
                        </PopperWrapper>
                    </div>
                )}
                visible={visible}
                onClickOutside={Hide}
                interactive
                placement="right"
                delay={[800, 800]}
            >
                {
                    <button className={cx('custom-menu')} onClick={visible ? Hide : Show}>
                        {children}
                    </button>
                }
            </Tippy>
        </div>
    );
}

export default Menu;
