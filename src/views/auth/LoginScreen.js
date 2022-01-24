import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
	const navigation = useNavigation()

	return (
		<View>
			<Text>Login Screen</Text>
			<Button title="Go To Home Screen" onPress={() => navigation.navigate('HomeScreen')}></Button>
			<Button title="Go To Register Screen" onPress={() => navigation.navigate('RegisterScreen')}></Button>
		</View>
	);

}
