/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Inicio from './inicio';
import Body from './Body';
import Final from './Final'

export default class App extends Component {
  
  constructor(){
    super();
    this.state={
      numero: 2
    }
  }

  aumentar = () => {    
        this.setState({
            numero: this.state.numero + 1
        })
  }

  disminuir = () => {
    this.setState({
      numero: this.state.numero - 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
            <Inicio name="Calculadora"/>
            <Body numero={this.state.numero}/>
            <Final
            aumentar={this.aumentar}
            disminuir={this.disminuir}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    color: '#fff'
  }
});
