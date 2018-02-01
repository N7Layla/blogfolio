/* eslint-disable */
import React from 'react';
import Link from 'gatsby-link';
import { Box } from '../../components/Layout';
import colors from '../../utils/colors';
import { css } from 'react-emotion';

const listStyle = css`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & li:hover {
    color: #4ca2cd;
  }
`;

const title = css`
  padding: 0.5em;
  background-color: rgba(103,178,111,0.2);
  box-shadow: 1px 1px 2px white, 0 0 5px #67b26f;
  border-radius: 20px;
  margin: 0.5em;
  }
`;

const BlogIndex = ({ data, transition }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Box bg={colors.primary} style={transition && transition.style}>
      <Box
        width={[1, 1, 1 / 2]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
        color={colors.secondary}
        align="center"
      >
        <h1>Blog</h1>
        <ul className={listStyle}>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              return (
                <li key={post.id}>
                  <Link to={post.fields.slug}>
                    <h3 className={title}>{post.frontmatter.title}</h3>
                  </Link>
                  <p>{post.frontmatter.date}</p>
                  <p>{post.excerpt}</p>
                </li>
              );
            })}
        </ul>
      </Box>
    </Box>
  );
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
/* eslint-enable */

export default BlogIndex;
