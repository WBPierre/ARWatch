import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Layout from '../config/Layout'

/*

type props {
  image: string
  name: string
  price: string
}
*/

const CardWatch = (props) => {
  console.log(props.image)
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={{ uri:props.image }}
          style={styles.watch}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.price}>{props.price}€</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: Layout.margin,
    padding: Layout.marginL,
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
  watch: {
    height: 300,
    width: Layout.window.width/1.5,
    borderRadius: Layout.radius
  },
  textContainer: {
    flex: 1,
    paddingTop: Layout.marginL,
    alignItems: 'center'

  },
  name: {
    flexWrap: 'wrap',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  price: {
    paddingTop: Layout.margin,
    fontSize: 12
  }
});


export default CardWatch;
