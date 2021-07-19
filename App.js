import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert, Button } from 'react-native'

export default class Server extends Component {
  
    constructor(props){
        super(props)

        this.state = {
            response: "Click to connect"
        }
    }

    connect = async () => {
      try {
        //link for server
        let response = await fetch(
          'http://localhost:3000/get'
        );
        let json = await response.json();
        console.log(json);
        this.setState({
              
          date: json.Date,
          state: json.State,
          noOfCases: json.NoOfCases
          
       })
       console.log(this.state.state);
      } catch (error) {
         console.error(error);
      }
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>{this.state.response}</Text>
                <Button title="connect" onPress={this.connect}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 20,
    margin:10,
    textAlign: 'center'
  }
});
