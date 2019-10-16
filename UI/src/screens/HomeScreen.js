import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import NavigationOptions from '../components/NavigationOptions';
import CardWatch from '../components/CardWatch'
import Layout from '../config/Layout'


class HomeScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor: tintColor }) => (
      <Image
        source={require('../images/test.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
    ...NavigationOptions,
    title: 'Accueil'
  };


  _renderItem ({item, index}) {
    return (
      <CardWatch
        key={index}
        title={item.title}
        price={item.price}
        image={item.image}
      />
    );
  }

  render () {

    const api =
    [
      {
        title: 'Boitier en aluminium argent de 40 mm',
        price: 'A partir de 449€',
        image: require('../images/watch1.jpeg')
      },
      {
        title: 'test',
        image: require('../images/watch1.jpeg')
      },
      {
        title: 'test',
        image: require('../images/watch1.jpeg')
      }
    ];

    return(
      <View style={styles.container}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={api}
          renderItem={this._renderItem}
          sliderWidth={Layout.window.width}
          itemWidth={Layout.window.width}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default HomeScreen;
