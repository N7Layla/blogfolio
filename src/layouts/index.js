import React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import { fontSize } from 'styled-system';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';
import colors from '../utils/colors';

/* eslint-disable */
import normalize from 'normalize.css';
injectGlobal`
  * {
      font-family: -apple-system, BlinkMacSystemFont,
             'avenir next', avenir,
             'helvetica neue', helvetica,
             ubuntu,
             roboto, noto,
             'segoe ui', arial,
             sans-serif;
      box-sizing: border-box;
  };

  a {
    color: inherit;
    text-decoration: none;
    -o-transition: 1s;
    -ms-transition: 1s;
    -moz-transition: 1s;
    -webkit-transition: 1s;
    transition: 1s;
  };

 a:hover {
    cursor: pointer;
    color: #67b26f;
    -o-transition: 1s;
    -ms-transition: 1s;
    -moz-transition: 1s;
    -webkit-transition: 1s;
    transition: 1s;
  };

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.secondary}
  };
  p {
    color: ${colors.accent}
  }
`;
/* eslint-enable */

const FontConfig = styled.div`
  ${fontSize};
`;

const Layout = ({ children }) => (
  <FontConfig fontSize={[2, 3, 4]}>
    <Navigation />
    {children()}
  </FontConfig>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
