import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import api from '~/services/api';

import Header from '~/components/Header';
import { signOut } from '~/store/modules/auth/actions';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // const signed = useSelector(state => state.auth.signed);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   api.interceptors.response.use(
  //     response => response,
  //     error => {
  //       if (error.response.status === 401) {
  //         error.response.data.error = 'Sua sessão expirou';
  //         dispatch(signOut());
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // }, [dispatch]);

  // if (!signed && isPrivate) {
  //   return <Redirect to="/" />;
  // }

  // if (signed && !isPrivate) {
  //   return <Redirect to="/dashboard" />;
  // }

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
