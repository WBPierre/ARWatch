import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
import Layout from '../config/Layout'

/*

type props {
  image: string
  title: string
  price: string
}
*/

const CardWatch = (props) => {
  return(
    <View style={styles.container}>
      <Image
        source={props.image}
        style={styles.watch}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Layout.marginL
  },
  watch: {
    width: Layout.window.width,
    height: 400
  },
  title: {
    paddingTop: Layout.marginL,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  price: {
    textAlign: 'center'
  }
});


export default CardWatch;
