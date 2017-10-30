/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, View, TextStyles, Text } from 'react-sketchapp';
import designSystem from './designSystem';
import Activity from './activity';
import Enquiry from './enquiry';
import Dashboard from './dashboard';
import Styleguide from './styleguide';

export default () => {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    designSystem.fonts
  );

  render(<Dashboard system={designSystem} />, context.document.currentPage());
};
