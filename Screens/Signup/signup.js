import React from 'react';
import { Button, View, Text } from 'react-native';



class Signup extends React.Component {
    static navigationOptions = ({screenProps}) => {
     
        return{
        title: 'Sign Up',
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
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign Up</Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default Signup;

