import React from 'react';

import { StyledPage } from './styles';

export default function Page({ title, subTitle, loading, children }) {
  return (
    <StyledPage hasSub={subTitle}>
      <h1>{title}</h1>
      <h6>{subTitle}</h6>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '75vh' }}
        >
          <div
            className="spinner-border spinner-border-xl text-success"
            style={{ width: '5rem', height: '5rem' }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        children
      )}
    </StyledPage>
  );
}
