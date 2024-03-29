/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

import renderIf from './js/helpers/renderIf';

import {
  ViroARSceneNavigator
} from 'react-viro';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"47B7F1EE-D208-470E-BE4B-5F1A3C318742",
}

var objArray = [
  require('./js/res/watch/11801_Watch_v1_l2.obj'),
];

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/HelloWorldSceneAR');
var InitialVRScene = require('./js/HelloWorldScene');

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();
    this._onShowObject = this._onShowObject.bind(this);
    this._renderTrackingText = this._renderTrackingText.bind(this);
    this._onTrackingInit = this._onTrackingInit.bind(this);
    this._onDisplayDialog = this._onDisplayDialog.bind(this);
    this._onLoadStart = this._onLoadStart.bind(this);
    this._onLoadEnd = this._onLoadEnd.bind(this);

    this.state = {
      viroAppProps: {
        displayObject: false,
        objectSource: objArray[0],
        yOffset: 0,
        _onLoadEnd: this._onLoadEnd,
        _onLoadStart: this._onLoadStart,
        _onTrackingInit: this._onTrackingInit
      },
      trackingInitialized: false,
      isLoading: false,
    }
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    return (
        <View style={localStyles.outer}>
          <ViroARSceneNavigator style={localStyles.arView} apiKey="47B7F1EE-D208-470E-BE4B-5F1A3C318742"
                                initialScene={{
                                  scene: InitialARScene,
                                  passProps: {displayObject: this.state.displayObject}
                                }} viroAppProps={this.state.viroAppProps}
          />

          {this._renderTrackingText()}

          {renderIf(this.state.isLoading,
              <View style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ActivityIndicator size='large' animating={this.state.isLoading} color='#ffffff'/>
              </View>)
          }

          <View style={{position: 'absolute', left: 0, right: 0, bottom: 77, alignItems: 'center'}}>
            <TouchableHighlight style={localStyles.buttons}
                                onPress={this._onDisplayDialog}
                                underlayColor={'#00000000'}>
              <Image source={require("./js/res/btn_mode_objects.png")}/>
            </TouchableHighlight>
          </View>
        </View>
    );
  }

  // Invoked when a model has started to load, we show a loading indictator.
  _onLoadStart() {
    this.setState({
      isLoading: true,
    });
  }

  // Invoked when a model has loaded, we hide the loading indictator.
  _onLoadEnd() {
    this.setState({
      isLoading: false,
    });
  }

  _renderTrackingText() {
    if (this.state.trackingInitialized) {
      return (<View style={{
        position: 'absolute',
        backgroundColor: "#ffffff22",
        left: 30,
        right: 30,
        top: 30,
        alignItems: 'center'
      }}>
        <Text style={{fontSize: 12, color: "#ffffff"}}>Tracking initialized.</Text>
      </View>);
    } else {
      return (<View style={{
        position: 'absolute',
        backgroundColor: "#ffffff22",
        left: 30,
        right: 30,
        top: 30,
        alignItems: 'center'
      }}>
        <Text style={{fontSize: 12, color: "#ffffff"}}>Waiting for tracking to initialize.</Text>
      </View>);
    }
  }

  _onTrackingInit() {
    this.setState({
      trackingInitialized: true,
    });
  }


  _onDisplayDialog() {
    Alert.alert(
        'Augarde AR',
        'Sélectionner la montre que vous désirez voir',
        [
          {text: 'Apple Watch', onPress: () => this._onShowObject(0, "watch", 0)},
        ],
    );
  }

  _onShowObject(objIndex, objUniqueName, yOffset) {
    this.setState({
      viroAppProps: {
        ...this.state.viroAppProps,
        displayObject: true,
        yOffset: yOffset,
        displayObjectName: objUniqueName,
        objectSource: objArray[objIndex]
      },
    });
  }
}

var localStyles = StyleSheet.create({
  outer: {
    flex: 1,
  },

  arView: {
    flex: 1,
  },

  buttons: {
    height: 80,
    width: 80,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#00000000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff00',
  }
});

module.exports = ViroSample
