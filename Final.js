import React, { Component } from "react";
import { 
    Platform,
    View,
    Text,
    Button,
    StyleSheet
 } from "react-native";

 export default class Final extends Component {
     render(){
         return(
            <View style={styles.container}>
                <Button
                title="Aumentar"
                onPress={this.props.aumentar}/>
                <Button
                title="Disminuir"
                onPress={this.props.disminuir}/>
            </View>
         );
     } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#922626',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
})