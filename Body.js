import React, { Component } from 'react'
import { 
    Platform,
    View,
    Text,
    StyleSheet
 } from "react-native";

 export default class Body extends Component {
     render() {
         return(
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.props.numero}</Text>
            </View>
         );
     }
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C91818'
      },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    }
 })