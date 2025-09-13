import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, onClick, primary, large, normal, children, ...passProps }) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        return (props.to = to), (Component = Link);
    } else if (href) {
        return (props.href = href), (Component = 'a');
    }

    const classes = cx('wrapper', {
        primary,
        large,
        normal,
    });

    return (
        <Component className={classes} {...props}>
            <span>{children}</span>
        </Component>
    );
}

export default Button;
