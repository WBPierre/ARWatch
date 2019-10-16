import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native'

import NavigationOptions from '../components/NavigationOptions';
import Layout from '../config/Layout'


class HomeScreen extends React.Component {

  static navigationOptions = {
    ...NavigationOptions,
    title: 'Detail',
  
  };

  render () {
    return(
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../images/watch1.jpeg')}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Montre Festina F20358/4</Text>
          <Text style={styles.price}>155€</Text>
          <Text style={styles.presentation}>Smooth stretch fabric, contrast binding, round neckline, cap sleeves, ruched side detail.
            Take your shoe style to new heights with this alluring peep toe court shoe. Features a slim high heel and metallic detailing along the platform. Team with a high waisted pencil skirt and midi top for after dark glam.</Text>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.presentation}>Model measurements: Height 5’9″, Waist 23.5″, Bust 32″, Hips 35″
            V-neckline
            Long sleeves
            Fitted silhouette
            Origin: Imported
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Layout.marginL,
  },
  imageContainer: {
    borderRadius: Layout.radius,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    borderRadius: Layout.radius,
    width: Layout.window.width - 2*Layout.marginL,
    height: 400,
  },
  textContainer: {
    paddingVertical: Layout.marginL
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 2,
  },
  price: {
    fontWeight: '100',
    fontSize: 15
  },
  presentation: {
    paddingVertical: Layout.marginL,
    color: Layout.color.secondary,
    fontWeight: '100',
    textAlign: 'justify'
  },
  description: {
    borderBottomWidth: 1,
    borderColor: '#000'
  }
});

export default HomeScreen;
