import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './SideBarButton.module.scss';

const cx = classNames.bind(styles);

function SideBarButton({ to, onClick, normal, ...passProps }) {
    const Component = 'button';
    const classes = cx('wrapper', {
        normal,
    });
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        return (props.to = to), (Component = Link);
    }

    return <Component className={classes} {...props} />;
}

export default SideBarButton;
