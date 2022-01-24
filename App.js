import React from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/views/auth/LoginScreen'
import RegisterScreen from './src/views/auth/RegisterScreen'
import HomeScreen from './src/views/main/HomeScreen'

const Stack = createStackNavigator()

export default function App() {

	return (
		<View style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator headerMode='screen' >
					<Stack.Screen name='LoginScreen' component={LoginScreen} />
					<Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
					<Stack.Screen name='HomeScreen' component={HomeScreen}/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	)
};
