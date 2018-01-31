/* eslint-disable no-undef, react/prop-types */
import React from 'react';
// import Img from 'gatsby-image';
// import { css } from 'react-emotion';
import { Box } from '../components/Layout';
import colors from '../utils/colors';

// const imgStyle = css`
//   border-radius: 5px;
// `;

const About = ({ transition }) => {
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
        {/* <Img className={imgStyle} alt="Picture of X" sizes={imageSharp.sizes} /> */}
        <h4>
          I&apos;m an animal lover, font collector, art appreciator and
          self-proclaimed Hufflepuff meets Ravenclaw.
        </h4>
        <p>
          A recent graduate of Fullstack Academy&apos;s Grace Hopper Program, I
          came into the computer science realm from a non-technical background
          that often allows me to see code from a fresh perspective. Upon
          completion of my Bachelor&apos;s degree in Art History and Classical
          Civilization from University of Richmond, I spent years working in
          historic tourism and later experienced the rollercoaster that is
          working customer service in the financial sector. I began to crave
          something more, and thought back to my teenage years spent teaching
          myself HTML and CSS in the name of fandom and Photoshop. A decision
          was made and I haven&apos;t looked back since.
        </p>

        <p>
          When not in front of a computer screen, I can occasionally be found
          playing fetch with my cat, volunteering at the local SPCA, reading on
          a train or pretending I&apos;m in an adventure RPG. I am currently
          looking for work opportunities as a developer. If you know of a cool
          place that&apos;s hiring, please feel free to get in contact!
        </p>
      </Box>
    </Box>
  );
};

// export const pageQuery = graphql`
//   query AboutQuery {
//     imageSharp(id: { regex: "/about/" }) {
//       sizes(maxWidth: 1000) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `;

export default About;
