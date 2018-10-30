import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
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
        resultado = 'Você Ganhou';
      }
      else {
        resultado = 'Você Perdeu';
      }
    }
    else if (escolhaComputador == 'papel') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Você Perdeu';
      }
      else if (escolhaUsuario == 'papel') {
        resultado = 'Empate';
      }
      else {
        resultado = 'Você Ganhou';
      } 
    }
    else {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Você Ganhou';
      }
      else if (escolhaUsuario == 'papel') {
        resultado = 'Você Perdeu';
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

        <Topo></Topo>

        <View style={styles.painelAcoes}>

          <View style={styles.btnEscolha}>
            <Button title='pedra' onPress={ () => {this.jokenpo('pedra')}} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='papel' onPress={ () => {this.jokenpo('papel')}}/>        
          </View>

          <View style={styles.btnEscolha}>
            <Button title='tesoura' onPress={ () => {this.jokenpo('tesoura')}}/>
          </View>

        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador={'Computador'}></Icone>

          <Icone escolha={this.state.escolhaUsuario} jogador={'Usuário'}></Icone>
          
          
        </View>

      </View>
    );
  }
}

class Topo extends Component {
  render() {
    return(
      <View>
          <Image source={require('./imgs/jokenpo.png')} resizeMode='stretch' style={{width:'100%'}}/>
        </View>
    );
  }
}

class Icone extends Component {
  render() {
    if(this.props.escolha == 'pedra') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./imgs/pedra.png')} />
        </View>
      );
    }
    else if(this.props.escolha == 'papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./imgs/papel.png')} />
        </View>
      );
    }
    else if(this.props.escolha == 'tesoura') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./imgs/tesoura.png')} />
        </View>
      );
    }
    else {
      return false;
    }
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }
});

AppRegistry.registerComponent('app3', () => app3);
