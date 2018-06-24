/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { css } from 'react-emotion';
import 'font-awesome/css/font-awesome.min.css';
import { Box } from '../components/Layout';
import colors from '../utils/colors';

const built = css`
  padding: 0.5em;
  background-color: rgba(103,178,111,0.2);
  box-shadow: 1px 1px 2px white, 0 0 5px #67b26f;
  border-radius: 20px;
  margin: 0.5em;
  }
`;

const linkage = css`
  display: flex;
  justify-content: space-between;
  }
`;

const Projects = ({ transition }) => (
  <Box style={transition && transition.style} bg={colors.primary}>
    <Box
      width={[1, 1, 1 / 2]}
      m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
      px={[3, 3, 0]}
      color={colors.secondary}
      align="center"
    >
      <h1>Projects </h1>
      <h2>ARTmood</h2>
      <p>
        Web app providing art by indicated mood, using the Harvard Art Museums
        API.
      </p>
      <p className={linkage}>
        <a href="https://github.com/N7Layla/artmood">
          <i className="fa fa-code" />
        </a>{' '}
        <a href="http://art-mood.herokuapp.com/">
          <i className="fa fa-eye" />
        </a>
      </p>
      <div className={built}>React.js</div>{' '}
      <div className={built}>React-Redux</div>
      <div className={built}>Material-UI</div>
      <h2>Twitch Explorer</h2>
      <p>
        Single page app utilizing the Twitch API to provide stream and gameplay
        data. Made for a blog post tutorial.
      </p>
      <p className={linkage}>
        <a href="https://github.com/N7Layla/twitch-explorer">
          <i className="fa fa-code" />
        </a>{' '}
        <a href="https://medium.com/@laylawrote/exploring-the-new-twitch-api-65069fada72c">
          <i className="fa fa-medium" />
        </a>
      </p>
      <div className={built}>Vue.js</div> <div className={built}>HTML</div>
      {/*<h2>Dunder Mifflin</h2>
      <p>
        A mock e-commerce website taking inspiration from a certain television
        series.
      </p>
      <p className={linkage}>
        <a href="https://github.com/N7Layla/dunder_mifflin">
          <i className="fa fa-code" />
        </a>{' '}
        <a href="http://dundermifflininc.herokuapp.com/">
          <i className="fa fa-eye" />
        </a>
      </p>
      <div className={built}>React.js</div> <div className={built}>Redux</div>{' '}
      <div className={built}>React-Redux</div>{' '}
      <div className={built}>Material-UI</div>{' '}
      <div className={built}>Express.js</div>{' '}
      <div className={built}>Sequelize</div>*/}
    </Box>
  </Box>
);

export default Projects;
