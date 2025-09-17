import classNames from 'classnames/bind';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper({ children, search, moreOption, ...props }) {
    // console.log(moreOption, search);
    const classes = cx('wrapper', {
        search: false,
        moreOption: false,
    });
    return <div className={classes}>{children}</div>;
}

export default Popper;
