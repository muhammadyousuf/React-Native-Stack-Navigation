import React from 'react';
import { Button, View, Text, TouchableHighlight } from 'react-native';


class Home extends React.Component {

  static navigationOptions = ({ screenProps }) => ({

    title: 'Home',
    headerLeft: (<Button onPress={() => screenProps.openDraw()} title="open" color='red' />
    ),
    headerStyle: {
      backgroundColor: '#f4de1e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow: 1,
    },

  });
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Signup')}>
          <Text>Home Screen</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default Home;

