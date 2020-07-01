import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import cx from 'clsx';

const ActiveLink = ({ router, children, href, activeClassName, ...otherProps }) => {
    const child = Children.only(children);
    const className = cx(child.props.className, { [activeClassName]: router.pathname === href && activeClassName });

    return (
        <Link href={href} {...otherProps}>
            {React.cloneElement(child, { className })}
        </Link>
    );
};

ActiveLink.propTypes = { activeClassName: PropTypes.string };

ActiveLink.defaultProps = { activeClassName: 'active' };

export default withRouter(ActiveLink);
