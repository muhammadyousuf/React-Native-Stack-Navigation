import React from 'react';
import { Button, View, Text } from 'react-native';



class Login extends React.Component {
    static navigationOptions = ({screenProps}) => {
     
        return{
        title: 'Login',
        headerLeft : (<Button onPress={()=>screenProps.openDraw()} title="open" color='red'  />
),
        headerStyle: {
            backgroundColor: '#f4de1e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
        },
    } };
     
  render() {
      console.log('props', this.props.navigation)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        <Button
          title="Sign up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default Login;

