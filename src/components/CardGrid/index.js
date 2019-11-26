import React from 'react';
import Grid from './styles';

export default function CardGrid({ loading, children, cardWidth }) {
  return loading ? (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border spinner-border-xl text-success"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <Grid cardWidth={cardWidth}>{children}</Grid>
  );
}
