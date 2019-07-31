import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';




class Login extends React.Component {
    static navigationOptions = {


        title: 'Login',
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#f4de1e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow: 1,
        },
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity   onPress={() => navigate('Home')} >
                    <Text>Login</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default Login;

