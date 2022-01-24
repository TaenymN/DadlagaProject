import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';


export default function RegisterScreen() {
    return (
        <View>
            <Text>Login Screen</Text>
            <Button title="Go To Home Screen" onPress={() => navigation.navigate('HomeScreen')}></Button>
            <Button title="Go To Login Screen" onPress={() => navigation.navigate('LoginScreen')}></Button>
        </View>
    );

}