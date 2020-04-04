import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { Container, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialBottomTabNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer2 = createDrawerNavigator();
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Homescreen from './screens/homescreen';
import About from './screens/about';
import DrawerNav from './screens/drawer';
import Screen2 from './screens/screen2';
import Screen3 from './screens/screen3';
import Details from './screens/details';

const drawerNav = () => {
	return (
		<Drawer2.Navigator drawerContent={() => <DrawerNav />}>
			<Drawer2.Screen name="Home" component={Homescreen} />
			<Drawer2.Screen name="About Us" component={About} />
			<Drawer2.Screen name="Screen2" component={Screen2} />
			<Drawer2.Screen name="Screen3" component={Screen3} />
		</Drawer2.Navigator>
	);
};

function MyStack() {
	return (
		<Stack.Navigator initialRouteName="About Us">
			<Stack.Screen options={{ headerShown: false }} name="About Us" component={About} />
			<Stack.Screen name="Screen3" component={Screen3} />
			<Stack.Screen name="details" component={Details} />
		</Stack.Navigator>
	);
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font
		});

		setTimeout(() => {
			this.setState({ isReady: true });
		}, 500);
	}

	render() {
		console.disableYellowBox = true;

		if (!this.state.isReady) {
			return (
				<ImageBackground
					style={{
						height: '100%',
						width: '100%',
						backgroundColor: 'rgba(0,0,0,1)',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center'
					}}
					resizeMode="cover"
					imageStyle={{ opacity: 0.4 }}
					source={{
						uri:
							'https://images.unsplash.com/photo-1555679486-e341a3e7b6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
					}}
				>
					<Image source={require('./assets/icon2.png')} />
					<Image source={require('./assets/831.gif')} />
				</ImageBackground>
			);
		}

		return (
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName="Home"
					shifting="true"
					activeColor="#fff"
					style={{ backgroundColor: 'yellow' }}
				>
					<Tab.Screen
						name="Home"
						component={drawerNav}
						options={{
							tabBarLabel: 'Home',
							tabBarIcon: ({ color }) => (
								<Icon name="home" style={{ color: 'white', fontWeight: 'bold', fontSize: 26 }} />
							)
						}}
					/>
					<Tab.Screen
						name="stackNav"
						component={MyStack}
						options={{
							tabBarColor: '#00C0EF',
							tabBarLabel: 'Experience',
							tabBarIcon: ({ color }) => (
								<Icon name="list" style={{ color: 'white', fontWeight: 'bold', fontSize: 26 }} />
							)
						}}
					/>
					<Tab.Screen
						name="Profile"
						component={Screen2}
						options={{
							tabBarLabel: 'Projects',
							tabBarIcon: ({ color }) => (
								<Icon
									name="ios-apps"
									style={{ color: 'white', fontWeight: 'bold', fontSize: 26 }}
								/>
							)
						}}
					/>
					<Tab.Screen
						name="Settings"
						component={Screen3}
						options={{
							tabBarColor: '#00C0EF',
							tabBarLabel: 'Profile',
							tabBarIcon: ({ color }) => (
								<Icon
									name="person"
									style={{ color: 'white', fontWeight: 'bold', fontSize: 26 }}
								/>
							)
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#00C0EF',
		alignItems: 'center',
		justifyContent: 'center'
	},
	wrapper: {
		width: 100,
		height: 100,
		marginBottom: 5,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'red',
		borderWidth: 10
	}
});
