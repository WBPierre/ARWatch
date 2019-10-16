import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel';

import NavigationOptions from '../components/NavigationOptions';
import CardWatch from '../components/CardWatch'
import Layout from '../config/Layout'
import Separator from '../components/Separator'


class HomeScreen extends React.Component {

  static navigationOptions = {
    ...NavigationOptions,
    title: 'Detail'
  };

  render () {
    return(
      <View style={styles.container}>
        <Image
          source={require('../images/watch1.jpeg')}
          style={styles.watch}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  watch: {
    width: Layout.window.width,
    height: 400,
  }
});

export default HomeScreen;
