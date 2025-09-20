import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    primary,
    large,
    leftIcon,
    rightIcon,
    normal,
    searchItem,
    moreItems,
    circles,
    className,
    fixxed,
    children,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick: onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        large,
        normal,
        searchItem,
        moreItems,
        circles,
        fixxed,
        [className]: className,
    });

    return (
        <Component className={classes} {...props}>
            <span>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                {children}
                {rightIcon && <span>{rightIcon}</span>}
            </span>
        </Component>
    );
}

export default Button;
