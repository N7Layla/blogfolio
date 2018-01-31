/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Box } from '../components/Layout';
import colors from '../utils/colors';

const Contact = ({ transition }) => (
  <Box style={transition && transition.style} bg={colors.primary}>
    <Box
      width={[1, 1, 1 / 2]}
      m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
      px={[3, 3, 0]}
      color={colors.secondary}
      align="center"
    >
      <h1>Contact </h1>
      <p>
        Whether you have a professional inquiry or just want to talk code, I
        would love to hear from you!
      </p>
      <h5>
        <a href="mailto:laylawrote@gmail.com">Send me an email.</a>
      </h5>
    </Box>
  </Box>
);

export default Contact;
