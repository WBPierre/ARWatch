// @flow

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Layout from '../config/Layout';

const Separator = (props) => {
  const { color = Layout.color.secondary, orientation = 'horizontal' } = props;
  return (
    <View
      style={[
        orientation === 'horizontal' ? styles.horizontal : styles.vertical,
        { backgroundColor: color },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  horizontal: {
    height: 1,
  },
  vertical: {
    marginHorizontal: Layout.margin,
    width: 1,
    height: '100%',
    alignSelf: 'center',
  },
});

export default Separator;
