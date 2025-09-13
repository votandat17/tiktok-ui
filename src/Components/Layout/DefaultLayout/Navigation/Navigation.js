import classNames from 'classnames/bind';

import style from './Navigation.module.scss';

const cx = classNames.bind(style);

function Navigation() {
    return <aside className={cx('wrapper')}></aside>;
}

export default Navigation;
