import classNames from 'classnames/bind';

import styles from './FooterSideBar.module.scss';

const cx = classNames.bind(styles);
function FooterSideBar() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('footer-text')}>Company</h3>
            <h3 className={cx('footer-text')}>Program</h3>
            <h3 className={cx('footer-text')}>Terms & Polcies</h3>
            <span className={cx('copyright')}>© 2025 TikTok</span>
        </div>
    );
}

export default FooterSideBar;
