import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';



class Signup extends React.Component {
    static navigationOptions =  {
     
        title: 'Sign Up',
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#f4de1e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
        },
    } 
     
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <TouchableOpacity  onPress={() => this.props.navigation.navigate('Login')}
   >
       <Text>Sign Up</Text>
       </TouchableOpacity>
       
      
      </View>
    );
  }
}

export default Signup;

