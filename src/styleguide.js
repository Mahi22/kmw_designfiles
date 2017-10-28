/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';

import Label from './components/Label';
import Palette from './components/Palette';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';

const Document = ({ system }: { system: DesignSystem }) => (
  <View>
    <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 4 }}>
      <Label>
        KMW design document for design system.
      </Label>
    </View>

    <Section title="Type Styles">
      {Object.keys(system.fonts).map(name => (
        <TypeSpecimen name={name} style={TextStyles.get(name)} />
      ))}
    </Section>

    <Section title="Color Palette">
      <Palette colors={system.colors} />
    </Section>
  </View>
);

export default Document;
