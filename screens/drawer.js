import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	DeckSwiper,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right,
	View,
	Title,
	Segment,
	Drawer,
	SideBar,
	Item,
	Input,
	List,
	ListItem,
	Switch,
	Picker,
	Center,
	Accordion
} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer2 = createDrawerNavigator();
import Homescreen from './homescreen';
import { NavigationContainer } from '@react-navigation/native';

const dataArray = [
	{
		title: 'DropdownOne',
		content: 'DropdownTwo',
		content: 'Your DropdownOne Content goes here!!!'
	},
	{ title: 'DropdownTwo', content: 'Your DropdownTwo Content goes here!!!' }
];

const data = [
	{ title: 'ArticleOne' },
	{ title: 'ArticleTwo' },
	{ title: 'ArticleThree' }
];
const data2 = [
	{ title: 'Clint One' },
	{ title: 'Client Two' },
	{ title: 'Client Three' }
];
const data3 = [{ title: 'Partner 1' }, { title: 'Partner 2' }, { title: 'Partner3' }];

export default class DrawerNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 1,
			toggleDropdown: false,
			toggleDropdown2: false,
			toggleDropdown3: false,
			dropdownIcon: 'ios-arrow-dropright-circle',
			dropdownIcon2: 'ios-arrow-dropright-circle',
			dropdownIcon3: 'ios-arrow-dropright-circle',
			isReady: false
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font
		});
		this.setState({ isReady: true });
	}
	onClickButton = () => {
		if (this.state.dropdownIcon == 'ios-arrow-dropright-circle') {
			this.setState({
				dropdownIcon: 'ios-arrow-dropdown-circle',
				toggleDropdown: !this.state.toggleDropdown
			});
		} else {
			this.setState({
				dropdownIcon: 'ios-arrow-dropright-circle',
				toggleDropdown: !this.state.toggleDropdown
			});
		}
	};
	onClickButton2 = () => {
		if (this.state.dropdownIcon == 'ios-arrow-dropright-circle') {
			this.setState({
				dropdownIcon2: 'ios-arrow-dropdown-circle',
				toggleDropdown2: !this.state.toggleDropdown2
			});
		} else {
			this.setState({
				dropdownIcon2: 'ios-arrow-dropright-circle',
				toggleDropdown2: !this.state.toggleDropdown2
			});
		}
	};
	onClickButton3 = () => {
		if (this.state.dropdownIcon == 'ios-arrow-dropright-circle') {
			this.setState({
				dropdownIcon3: 'ios-arrow-dropdown-circle',
				toggleDropdown3: !this.state.toggleDropdown3
			});
		} else {
			this.setState({
				dropdownIcon3: 'ios-arrow-dropright-circle',
				toggleDropdown3: !this.state.toggleDropdown3
			});
		}
	};

	render() {
		return (
			<Container>
				<ImageBackground
					style={{ height: 320, width: '100%', backgroundColor: 'rgba(0,0,0,1)' }}
					resizeMode="cover"
					imageStyle={{ opacity: 0.4 }}
					source={{
						uri:
							'https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
					}}
				>
					<Header style={{ height: 180, width: '100%' }} transparent></Header>

					<View
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '100%',
							borderRadius: 50
						}}
					>
						<Thumbnail
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								width: 100,
								height: 100,
								marginTop: -60,
								borderRadius: 50,
								borderWidth: 5,
								borderColor: 'white'
							}}
							source={{
								uri:
									'https://blaze-portfolio.firebaseapp.com/assets/images/IMG_20190304_153107.jpg'
							}}
						/>
					</View>
					<Content>
						<Header searchBar rounded transparent>
							<Item rounded>
								<Icon name="ios-search" />
								<Input placeholder="Search" />
								<Icon name="ios-people" />
							</Item>
							<Button transparent>
								<Text>Search</Text>
							</Button>
						</Header>
					</Content>
				</ImageBackground>
				<Content>
					<ListItem icon>
						<Left>
							<Button style={{ backgroundColor: '#FF9501' }}>
								<Icon active name="home" />
							</Button>
						</Left>
						<Body>
							<Text>Home</Text>
						</Body>
					</ListItem>
					<ListItem icon>
						<Left>
							<Button style={{ backgroundColor: '#007AFF' }}>
								<Icon active name="list" />
							</Button>
						</Left>
						<Body>
							<Text>Experience</Text>
						</Body>
					</ListItem>
					<ListItem icon>
						<Left>
							<Button style={{ backgroundColor: '#007AFF' }}>
								<Icon active name="ios-apps" />
							</Button>
						</Left>
						<Body>
							<Text>Projects</Text>
						</Body>
					</ListItem>
					<ListItem icon>
						<Left>
							<Button style={{ backgroundColor: '#007AFF' }}>
								<Icon active name="person" />
							</Button>
						</Left>
						<Body>
							<Text>Profile</Text>
						</Body>
					</ListItem>
					<ListItem icon onPress={this.onClickButton}>
						<Left>
							<Button style={{ backgroundColor: '#007AFF' }}>
								<Icon active name="ios-list-box" />
							</Button>
						</Left>
						<Body>
							<Text>Blog</Text>
						</Body>
						<Right>
							<Icon active name={this.state.dropdownIcon} />
						</Right>
					</ListItem>
					{this.state.toggleDropdown && //cek if toggle is true or false
						data.map((item, index) => {
							//loop the first dropdown
							return (
								<ListItem icon key={index} style={{ marginLeft: 50 }}>
									<Left>
										<Button style={{ backgroundColor: '#FF9501' }}>
											<Icon active name="logo-slack" />
										</Button>
									</Left>
									<Body>
										<Text>{item.title}</Text>
									</Body>
								</ListItem>
							);
						})}
					<ListItem icon onPress={this.onClickButton2}>
						<Left>
							<Button style={{ backgroundColor: '#007AFF' }}>
								<Icon active name="md-contacts" />
							</Button>
						</Left>
						<Body>
							<Text>Happy Clients</Text>
						</Body>
						<Right>
							<Icon active name={this.state.dropdownIcon2} />
						</Right>
					</ListItem>
					{this.state.toggleDropdown2 && //cek if toggle is true or false
						data2.map((item, index) => {
							//loop the first dropdown
							return (
								<ListItem icon key={index} style={{ marginLeft: 50 }}>
									<Left>
										<Button style={{ backgroundColor: '#FF9501' }}>
											<Icon active name="logo-slack" />
										</Button>
									</Left>
									<Body>
										<Text>{item.title}</Text>
									</Body>
								</ListItem>
							);
						})}
					<ListItem icon onPress={this.onClickButton3}>
						<Left>
							<Button style={{ backgroundColor: '#007AFF' }}>
								<Icon active name="logo-apple" />
							</Button>
						</Left>
						<Body>
							<Text>Proud Partners</Text>
						</Body>
						<Right>
							<Icon active name={this.state.dropdownIcon3} />
						</Right>
					</ListItem>
					{this.state.toggleDropdown3 && //cek if toggle is true or false
						data3.map((item, index) => {
							//loop the first dropdown
							return (
								<ListItem icon key={index} style={{ marginLeft: 50 }}>
									<Left>
										<Button style={{ backgroundColor: '#FF9501' }}>
											<Icon active name="logo-github" />
										</Button>
									</Left>
									<Body>
										<Text>{item.title}</Text>
									</Body>
								</ListItem>
							);
						})}
					<Accordion dataArray={dataArray} />
					<Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
				</Content>
			</Container>
		);
	}
}
