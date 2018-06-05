import React, { Component } from 'react';
import { 
    Plataform,
    StyleSheet,
    Text,
    View
 } from 'react-native';

 export default class Inicio extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.props.name}</Text>
            </View>
        );
    }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#FF0101'
     },
     welcome: {
         fontSize: 20,
         textAlign: 'center',
         margin: 10,
         color: '#fff'
     }
 })