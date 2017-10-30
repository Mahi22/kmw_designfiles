import React from 'react';
import {View } from 'react-sketchapp';
import Desktop from './components/Desktop';
import NavBar from './components/navigation/Navbar';

const Document = ({ system }: { system: DesignSystem }) => (
    <View>
        <Desktop>
            <NavBar />
        </Desktop>
    </View>
  );

export default Document;
