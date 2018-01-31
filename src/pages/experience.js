/* eslint-disable no-undef, react/prop-types */
import React from 'react';
// import Img from 'gatsby-image';
// import { css } from 'react-emotion';
import { Box } from '../components/Layout';
import colors from '../utils/colors';
import resume from '../assets/resume.pdf';

// const imgStyle = css`
//   border-radius: 5px;
// `;

const Experience = ({ transition }) => {
  // const { imageSharp } = data;
  return (
    <Box style={transition && transition.style} bg={colors.primary}>
      <Box
        width={[1, 1, 1 / 2]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
        color={colors.secondary}
        align="center"
      >
        <h1>Experience</h1>
        <h3>My main sources of education have been...</h3>
        <p>
          Fullstack Academy, Free Code Camp, University of Richmond and endless
          hours spent searching the internet
        </p>
        <h3>I absolutely love working with...</h3>
        <p>
          Javascript, Node.js, React, Redux, CSS, HTML, ES6, Express, Sequelize,
          Materialize, Axios, Git
        </p>
        <h3>But I also have great experience in...</h3>
        <p>
          Vue.js, Wordpress, PHP, Sockets, Pixi.js, Gatsby, Bootstrap, Jasmine,
          Mocha/Chai, jQuery, Nunjucks, PostgreSQL, RESTful APIs, Bluebird,
          Passport, Agile Workflow, Joomla
        </p>
        <h3>And I am excitedly learning...</h3>
        <p>Python, Java, MongoDB, Go, Swift, Sass, Django</p>
        <h3>Other skills and interests include...</h3>
        <p>
          Adobe Photoshop, Raisers Edge, Microsoft Office Suite, Writing,
          Photography, Film Production
        </p>
        <h4>
          <a href={resume} download="Layla Hedges - Resume">
            Download Full Resume
          </a>
        </h4>
      </Box>
    </Box>
  );
};

export default Experience;
