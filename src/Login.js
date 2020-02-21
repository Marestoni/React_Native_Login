
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
import {NavigationAction} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



export default class Login extends Component {
    static navigationOptions = {
        title: 'Login'
    }

constructor(props){
  super(props);
  this.state= {
    email: '',
    senha: ''
  
  } 
  this.logar = this.logar.bind(this);
  
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      alert('Bem-vindo')
      this.props.navigation.navigate('Home', {name: 'Home'})
        
    }
  })
}

/*cadastrar(){
  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
  .catch((error)=>{
    if(error.code == 'auth/weak-password'){
      alert('Sua senha deve ter pelo menos 6 caracteres')
    }
    if(error.code == 'auth/invalid-email'){
      alert('Email invalido.'); 
    }else{
      alert('Codigo do erro: '+error.code);
    }
  });
  
}*/

logar(){
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
  .catch((error)=>{
    if(error.code == 'auth/wrong-password'){
      alert('Senha incorreta')
    }else{
      alert('tente novamente mais tarde')
    }
  });
}
  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30 ,textAlign:'center'}}>Entrar</Text>
        <TextInput style={styles.input} placeholder="Email" 
        underlineColorAndroid="transparent" onChangeText={(email)=>{this.setState({email})}} />

        <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" 
        underlineColorAndroid="transparent" onChangeText={(senha)=>{this.setState({senha})}} />

        <Button title="Logar" onPress={this.logar} />

        
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

