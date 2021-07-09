import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FcCalculator, FcHome } from 'react-icons/fc';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import { GiMagicHat } from 'react-icons/gi';

const StyledNav = styled.nav`
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: #0d0d0ed9 !important;
`;

const Nav = () => (
  <StyledNav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        Math Magicians
        <GiMagicHat className="ms-1 text-warning" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
              <FcHome className="ms-1" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calculator" className="nav-link">
              Calculator
              <FcCalculator className="ms-1" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quote" className="nav-link">
              Quote
              <BsFillChatQuoteFill className="ms-1 text-info" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </StyledNav>
);

export default Nav;
