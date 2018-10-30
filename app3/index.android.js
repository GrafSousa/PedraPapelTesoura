import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario : '', escolhaComputador : ''};
  }

  jokenpo(escolhaUsuario) {
    var numAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = '';

    var resultado = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    if (escolhaComputador == 'pedra') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Empate';
      }
      else if (escolhaUsuario == 'papel') {
        resultado = 'Ganhou';
      }
      else {
        resultado = 'Perdeu';
      }
    }
    else if (escolhaComputador == 'papel') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Perdeu';
      }
      else if (escolhaUsuario == 'papel') {
        resultado = 'Empate';
      }
      else {
        resultado = 'Ganhou';
      } 
    }
    else {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Ganhou';
      }
      else if (escolhaUsuario == 'papel') {
        resultado = 'Perdeu';
      }
      else {
        resultado = 'Empate';
      }

    }

    this.setState({ escolhaUsuario : escolhaUsuario,
                    escolhaComputador : escolhaComputador,
                    resultado : resultado
                  });
  }
  
  render() {
    return (
      <View>
        <Text>Escolha do computador: {this.state.escolhaComputador}</Text>        
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: {this.state.resultado}</Text>

        <Button title='pedra' onPress={ () => {this.jokenpo('pedra')}} />
        <Button title='papel' onPress={ () => {this.jokenpo('papel')}}/>        
        <Button title='tesoura' onPress={ () => {this.jokenpo('tesoura')}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('app3', () => app3);
