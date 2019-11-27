import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from '~/components/Header';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Header {...props} />
          <Component {...props} />
        </>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
