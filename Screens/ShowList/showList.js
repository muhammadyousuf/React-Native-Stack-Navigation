import React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';



class ShowList extends React.Component {
  static navigationOptions =  {
   drawerLabel : 'Show Todo',
   drawerIcon : () => (
     <Image  source={require('../../Icon/user.jpeg')} style={{  flex: 1,
      width: 50,
      height: 50,
      resizeMode: 'contain'}} />
   )
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Todo List</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

export default ShowList;

