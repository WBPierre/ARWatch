import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import NavigationOptions from '../components/NavigationOptions';
import Layout from '../config/Layout'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



class HomeScreen extends React.Component {

  static navigationOptions = {
    ...NavigationOptions,
    title: 'Detail',
    headerRight: (
      <TouchableOpacity onPress>
        <Icon
          name='cart-plus'
          type='font-awesome'
          color='#fff'
          size={30}
        />
      </TouchableOpacity>
    ),
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

        <View style={styles.buttonContainer}>
          <Button
              title=" Button  "
              style={styles.buttonStyle}/>
          <Button
              title=" Button  "
              style={styles.buttonStyle}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  buttonStyle: {
  height: 40,
      width:160,
      borderRadius:10,
      marginLeft :5,
      marginRight:5

},


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

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 2,
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center'
  },
  price: {
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    fontWeight: '100',
    fontSize: 33
  },
  presentation: {
    paddingVertical: Layout.marginL,
    color: Layout.color.secondary,
    fontWeight: '100',
    textAlign: 'justify',
    marginLeft: '10%',
    marginRight: '10%'
  },
  description: {
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000'
  }
});

export default HomeScreen;
