/* eslint-disable no-undef, react/prop-types */
import { css } from 'react-emotion';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
// import FontAwesome from 'react-fontawesome';
// import Link from 'gatsby-link';
import { Box } from '../components/Layout';
import colors from '../utils/colors';
// import ButtonPrimary, { ButtonSecondary } from '../components/Buttons';

const socialStyle = css`
  flex-wrap: wrap;

  & i {
    padding: 1em;
    flex-wrap: wrap;
  }
`;

export default ({ transition }) => {
  // const myData = data.allContentJson.edges[0].node.index;
  return (
    <div style={transition && transition.style}>
      <Box bg={colors.primary}>
        <Box
          width={[1, 1, 1 / 2]}
          m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
          px={[3, 3, 0]}
          color={colors.secondary}
          align="center"
        >
          <h1>Hello!</h1>
          <h2>
            I&apos;m Layla, a full stack developer meets writer, gamer and pop
            culture enthusiast.
          </h2>
          <div className={socialStyle}>
            <a href="https://twitter.com/laylawrote">
              <i className="fa fa-twitter fa-2x" />
            </a>{' '}
            <a href="https://github.com/N7Layla">
              <i className="fa fa-github fa-2x" />
            </a>{' '}
            <a href="https://stackoverflow.com/users/8887158/layla-hedges?tab=profile">
              <i className="fa fa-stack-overflow fa-2x" />
            </a>{' '}
            <a href="https://www.linkedin.com/in/laylahedges/">
              <i className="fa fa-linkedin fa-2x" />
            </a>{' '}
            <a href="https://angel.co/layla-hedges">
              <i className="fa fa-angellist fa-2x" />
            </a>{' '}
            <a href="https://www.twitch.tv/laylawrote">
              <i className="fa fa-twitch fa-2x" />
            </a>{' '}
            <a href="https://www.goodreads.com/user/show/10094110-layla">
              <i className="fa fa-book fa-2x" />
            </a>
            <a href="https://letterboxd.com/vod/">
              <i className="fa fa-film fa-2x" />
            </a>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`;
