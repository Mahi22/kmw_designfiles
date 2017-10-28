/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import Mobile from './Mobile';

type P = {
  children?: any,
  overflow: boolean
};

const devices = [{
  name: 'android',
  width: 360,
  height: 640,
},{
  name: 'iphone 7',
  width: 375,
  height: 667,
},{
  name: 'iphone 7 plus',
  width: 414,
  height: 736,
},{
  name: 'iphone SE',
  width: 320,
  height: 568,
}]

const Devices = ({ children, overflow }: P) => (
  <View style={{ flexDirection: 'row'}} name="Devices">
    {
      devices.map((device, index) => (
        <Mobile width={device.width} height={device.height} name={device.name} key={`device${index}`} overflow={overflow ? true : false}>
          {children}
        </Mobile>
      ))
    }
  </View>
);

export default Devices;
