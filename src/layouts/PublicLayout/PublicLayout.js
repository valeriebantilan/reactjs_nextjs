import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import PublicHeader from '../../components/PublicHeader';


const PublicLayout = ({ children, router, routes, fixedHeader, showFooter, fullPage }) => {
    return (
        <>
            <PublicHeader />
            {children}
        </>   
    )
}

PublicLayout.propTypes = {
    children: PropTypes.any,
    router: PropTypes.shape({ pathname: PropTypes.string }),
    routes: PropTypes.arrayOf(PropTypes.object),
};

PublicLayout.defaultProps = {
    router: { pathname: '' },
    routes: [],
};

export default withRouter(PublicLayout);