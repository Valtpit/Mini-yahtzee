import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },

    header: {
      marginTop: 40,
      backgroundColor: '#c565eb',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: "#59266e",
    },
    title: {
      color: '#000',
      flex: 1,
      fontSize: 30,
      textAlign: 'center',
      margin: 12
    },

    gameboard: {
      alignContent: 'center',
      flex: 1,
    },

    button: {
      margin: 30,
      padding: 10,
      backgroundColor: "#c565eb",
      width: 150,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#59266e",
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    buttonText: {
      color: '#000',
      fontSize: 19
    },

    text: {
      fontSize: 18,
      color: '#000',
      marginBottom: 20,
      textAlign: 'center'
    },
    textTotal: {
      fontSize: 18,
      color: '#000',
      marginBottom: 20,
      textAlign: 'center'
    },
    bonus: {
      fontSize: 15,
      color: '#000',
      marginBottom: 20,
      textAlign: 'center'
    },

    row: {
      flexDirection: 'row', 
      marginTop: 20,
      marginBottom: 20,
    }, 
    column: {
      alignItems: 'center',
    },

    footer: {
      backgroundColor: '#c565eb',
      flexDirection: 'row',
      borderBottomWidth: 1, 
      borderTopWidth: 1,
      borderColor: "#59266e",
    },
    author: {
      color: '#000',
      flex: 1,
      fontSize: 17,
      textAlign: 'center',
      margin: 12
    },

    diceSize: 60,
    spotSize: 30,
  });