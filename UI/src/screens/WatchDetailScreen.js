import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import NavigationOptions from '../components/NavigationOptions';
import Layout from '../config/Layout'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


/*
type props {
  image: string
  name: string
  price: string
}
*/

class WatchDetailScreen extends React.Component {

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

    const { item } = this.props.navigation.state.params;

    return(
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item.image}}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.presentation}>{item.description}</Text>
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

export default WatchDetailScreen;
