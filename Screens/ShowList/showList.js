import React from 'react';
import { Button, View, Text } from 'react-native';



class ShowList extends React.Component {
    static navigationOptions = ({screenProps}) => {
        console.log('screenProps', screenProps)
        return{
        title: 'Todo List',
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
        <Text>Todo List</Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default ShowList;

