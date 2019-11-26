import React from 'react';

export default function Search({ placeholder, searchHandler }) {
  return (
    <form className="search">
      <div className="form-row">
        <div className="col">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder={placeholder}
            onChange={searchHandler}
          />
        </div>
      </div>
    </form>
  );
}
