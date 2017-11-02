/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, View, TextStyles, Text } from 'react-sketchapp';
import designSystem from './designSystem';
import Activity from './activity';
import Enquiry from './enquiry';

import Styleguide from './styleguide';
// import Screen from './screen';

import Main from './fsa/main';

export default () => {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    designSystem.fonts
  );

  render(<Main system={designSystem} />, context.document.currentPage());
};
