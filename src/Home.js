
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList
} from 'react-native';
import firebase from './firebaseConnection'
export default class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    }

constructor(props){
  super(props);
  this.state= {
    }
    this.sair = this.sair.bind(this);
}
sair(){
    firebase.auth().signOut();
    alert('deslogado')
    this.props.navigation.navigate('Login', {name: 'Login'})
    
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30 ,textAlign:'center'}}>Bem-Vindo</Text>
        <Button title="logout" onPress={this.sair} />
      </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20
  },
  input:{
    width:350,
    height: 50,
    backgroundColor: '#CCC',
    fontSize:22,
    padding: 5,
    margin:5
  },

  
});

