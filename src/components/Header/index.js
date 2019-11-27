import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaUserTie } from 'react-icons/fa';

import Brand from '~/assets/brand.png';
import { StyledLink } from './styles';
import './styles.css';

export default function Header({ location }) {
  function isHighlighted(path) {
    return path.split('/')[1] === location.pathname.split('/')[1];
  }

  return (
    <header className="totemfy-header">
      <nav className="dashboard-nav navbar navbar-expand-xl navbar-dark">
        <Link to="/disciplinas">
          <span className="navbar-brand">
            <img
              src={Brand}
              alt="Logo do Brain Puzzle"
              style={{ width: '52px', height: 'auto' }}
            />{' '}
            BrainPuzzle
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/disciplinas">
                <StyledLink
                  className="nav-link"
                  highlight={isHighlighted('/disciplinas')}
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <FaBook size={21} />
                  Disciplinas
                </StyledLink>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/carreiras">
                <StyledLink
                  className="nav-link"
                  highlight={isHighlighted('/carreiras')}
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <FaUserTie size={21} />
                  Carreiras
                </StyledLink>
              </Link>
            </li>
          </ul>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Leonardo
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <button type="button" className="dropdown-item">
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
