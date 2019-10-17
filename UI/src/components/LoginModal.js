import React from 'react';
import { Modal, View, StyleSheet, Image } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements'

import Layout from '../config/Layout';
import axios from 'axios'

class LoginModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
      }
    }

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value}
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email, password} = this.state;

    if(email.length >= 4 && password.length >= 4) {
      axios.post('https://hackaton2019watcher.herokuapp.com/users/login', {
        email: this.state.form.email,
        password: this.state.form.password
      }).then(res => {
      })
    }
  }


  render(){
    return(
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ flex: 1, marginTop: '50%' }}>
          <Image source={require('../images/logo.png')} style={styles.logo}/>
          <View style={styles.container}>
            <Input
              name='email'
              containerStyle={styles.containerInput}
              leftIconContainerStyle={styles.iconStyle}
              labelStyle={styles.labelStyle}
              placeholder='EMAIL'
              leftIcon={
                <Icon
                  name='user'
                  type='font-awesome'
                  color='#000'
                  size={15}
                />
              }
            />
            <Input
              name='password'
              onChange={this.onChange}
              value={this.state.password}
              containerStyle={styles.containerInput}
              leftIconContainerStyle={styles.iconStyle}
              labelStyle={styles.labelStyle}
              placeholder='PASSWORD'
              leftIcon={
                <Icon
                  name='lock'
                  type='font-awesome'
                  color='#000'
                  size={15}
                />
              }
            />
            <Button
              buttonStyle={styles.buttonStyle}
              title="Login"
              onPress={this.handleSubmit}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Layout.marginL
  },
  containerInput: {
    marginVertical: Layout.marginL
  },
  iconStyle: {
    marginRight: Layout.marginL
  },
  labelStyle: {
    fontWeight: '100'
  },
  logo: {
    alignSelf: 'center',
    width: 165,
    height: 110
  },
  buttonStyle: {
    marginVertical: Layout.marginL,
    backgroundColor: '#000',
    width: Layout.window.width - 2*Layout.marginL,
    height: 50,
    borderRadius: Layout.radius
  },
})


export default LoginModal;
