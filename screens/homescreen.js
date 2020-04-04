import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

import { WebView } from 'react-native-webview';
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
	Footer,
	FooterTab,
	Badge,
	ActionSheet,
	Root
} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import DrawerNav from './drawer';
import About from './about';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// var BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];

var BUTTONS = [
	{ text: 'Create', icon: 'american-football', iconColor: '#2c8ef4' },
	{ text: 'Update', icon: 'analytics', iconColor: '#f42ced' },
	{ text: 'Share', icon: 'aperture', iconColor: '#ea943b' },
	{ text: 'Delete', icon: 'trash', iconColor: '#fa213b' },
	{ text: 'Cancel', icon: 'close', iconColor: '#25de5b' }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class Homescreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 1,
			isReady: false
		};
		if (WebView.defaultProps == null) WebView.defaultProps = {};
		WebView.defaultProps.useWebKit = true;
	}

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font
		});
		this.setState({ isReady: true });
	}

	closeDrawer = () => {
		this.drawer._root.close();
	};
	selectComponent = active => () => {
		this.setState({ active });
	};

	closeWindow = active => () => {
		this.drawer._root.open();
	};

	render() {
		if (!this.state.isReady) {
			return (
				<ImageBackground
					style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,1)' }}
					resizeMode="cover"
					imageStyle={{ opacity: 0.4 }}
					source={{
						uri:
							'https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
					}}
				></ImageBackground>
			);
		}

		return (
			<Root>
				<Drawer
					ref={ref => {
						this.drawer = ref;
					}}
					content={<DrawerNav navigator={this.navigator} closeWindow={this.closeWindow} />}
					onClose={() => this.closeDrawer()}
					style={{ zIndex: 1 }}
				>
					<Container>
						<ImageBackground
							style={{ height: 225, width: '100%', backgroundColor: 'rgba(0,0,0,1)' }}
							resizeMode="cover"
							imageStyle={{ opacity: 0.4 }}
							source={{
								uri:
									'https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
							}}
						>
							<Header style={{ height: 180, width: '100%' }} transparent>
								<Left>
									<TouchableOpacity>
										<Button onPress={this.closeWindow()} transparent>
											<Icon
												name="menu"
												style={{ color: 'white', fontWeight: 'bold', fontSize: 34 }}
											/>
										</Button>
									</TouchableOpacity>
								</Left>

								<Right>
									<Button
										onPress={() =>
											ActionSheet.show(
												{
													options: BUTTONS,
													cancelButtonIndex: CANCEL_INDEX,
													destructiveButtonIndex: DESTRUCTIVE_INDEX,
													title: 'SAMPLE ACTION-SHEET!!!'
												},
												buttonIndex => {
													this.setState({ clicked: BUTTONS[buttonIndex] });
												}
											)
										}
										transparent
									>
										<Icon name="search" style={{ color: 'white', fontWeight: 'bold' }} />
									</Button>
								</Right>
							</Header>

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
										marginTop: -160,
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
							<Segment style={{ backgroundColor: 'transparent' }} transparent>
								<Button
									style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderWidth: 5 }}
									first
									active={this.state.active == 1}
									onPress={this.selectComponent(1)}
								>
									<Text>Passionate</Text>
								</Button>
								<Button active={this.state.active == 2} onPress={this.selectComponent(2)}>
									<Text>Code </Text>
								</Button>
								<Button
									style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20, borderWidth: 5 }}
									last
									active={this.state.active == 3}
									onPress={this.selectComponent(3)}
								>
									<Text>Designs</Text>
								</Button>
							</Segment>
						</ImageBackground>
						{this.state.active == 1 ? (
							<Content style={{ marginBottom: 10 }}>
								<Swiper
									dot={
										<View
											style={{
												backgroundColor: 'red',
												width: 10,
												height: 15,
												borderRadius: 4,
												marginLeft: 3,
												marginRight: 3,
												marginTop: 3,
												marginBottom: 3
											}}
										/>
									}
									activeDot={
										<View
											style={{
												backgroundColor: 'white',
												width: 10,
												height: 10,
												borderRadius: 4,
												marginLeft: 3,
												marginRight: 3,
												marginTop: 3,
												marginBottom: 3
											}}
										/>
									}
									nextButton={<Text style={{ color: 'red', fontSize: 80 }}>›</Text>}
									prevButton={<Text style={{ color: 'red', fontSize: 80 }}>‹</Text>}
									showsButtons={true}
									style={{ height: 200 }}
									autoplay={true}
								>
									<View style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ height: null, width: null, flex: 1 }}
										/>
									</View>
									<View style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ height: null, width: null, flex: 1 }}
										/>
									</View>
									<View style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ height: null, width: null, flex: 1 }}
										/>
									</View>
									<View style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566023766902-331b7790175c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ height: null, width: null, flex: 1 }}
										/>
									</View>
									<View style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024212882-e5998ba2d0d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ height: null, width: null, flex: 1 }}
										/>
									</View>
								</Swiper>
								<Card style={{ height: 250 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '100%', width: '100%' }}>
										<WebView
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/I-a2IgUFa5c?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<TouchableWithoutFeedback
									onPress={() => this.props.navigation.navigate('About Us')}
								>
									<Card style={{ flex: 0, marginTop: 10 }}>
										<CardItem>
											<Left>
												<Thumbnail
													source={{
														uri:
															'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
													}}
												/>
												<Body>
													<Text>Passionate Code Designs</Text>
													<Text note>@-2020</Text>
												</Body>
											</Left>
										</CardItem>
										<CardItem>
											<Body>
												<Image
													source={{
														uri:
															'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
													}}
													style={{ height: 200, width: '100%', flex: 1 }}
												/>
												<Text>Blaze's Portfolio Launching Soon!!!</Text>
											</Body>
										</CardItem>
										<CardItem>
											<Left>
												<Button transparent textStyle={{ color: '#87838B' }}>
													<Icon name="logo-github" />
													<Text>1,926 stars</Text>
												</Button>
											</Left>
										</CardItem>
									</Card>
								</TouchableWithoutFeedback>
								<Card>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem cardBody>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ height: 200, width: null, flex: 1 }}
										/>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem cardBody>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ height: 200, width: null, flex: 1 }}
										/>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1524234599372-a5bd0194758d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1569402214861-402654cfd189?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1579273142152-e1398f51c7be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1560703649-e3055f28bcf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1557254389-0b0ce722d9d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1506804886640-20a2c0857946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem cardBody>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ height: 200, width: null, flex: 1 }}
										/>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem cardBody>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ height: 200, width: null, flex: 1 }}
										/>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1524234599372-a5bd0194758d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1569402214861-402654cfd189?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1579273142152-e1398f51c7be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1560703649-e3055f28bcf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1557254389-0b0ce722d9d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ flex: 1 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>
												<Text note>@-2020</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem>
										<Body>
											<Image
												source={{
													uri:
														'https://images.unsplash.com/photo-1506804886640-20a2c0857946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
												}}
												style={{ height: 200, width: '100%', flex: 1 }}
											/>
											<Text>Blaze's Portfolio Launching Soon!!!</Text>
										</Body>
									</CardItem>
									<CardItem>
										<Left>
											<Button transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
							</Content>
						) : this.state.active == 2 ? (
							<Content>
								<Card style={{ height: 400 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '70%', width: '100%' }}>
										<WebView
											style={{ height: 50, width: '100%' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/qGcang7Fa5A?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ height: 400 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '70%', width: '100%' }}>
										<WebView
											style={{ height: 50, width: '100%' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/J115i5uPu7A?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ height: 400 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '70%', width: '100%' }}>
										<WebView
											style={{ height: 50, width: '100%' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/4BmJNVDIrpk?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ height: 400 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '70%', width: '100%' }}>
										<WebView
											style={{ height: 50, width: '100%' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/q3eFXeO62oo?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ height: 400 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '70%', width: '100%' }}>
										<WebView
											style={{ height: 50, width: '100%' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/rChsOQElbaQ?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ height: 400 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '70%', width: '100%' }}>
										<WebView
											style={{ height: 50, width: '100%' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/eCI4a-fIINQ?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ height: 400 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '70%', width: '100%' }}>
										<WebView
											style={{ height: 50, width: '100%' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/IXqK9RZZ3qQ?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ height: 400 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '70%', width: '100%' }}>
										<WebView
											style={{ height: 50, width: '100%' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/1rCL9B1ZmIg?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ height: 400 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '70%', width: '100%' }}>
										<WebView
											style={{ height: 50, width: '100%' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/QWLrshN77J4?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ height: 400 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '70%', width: '100%' }}>
										<WebView
											style={{ height: 50, width: '100%' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/vazKpV0QylM?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
								<Card style={{ height: 400 }}>
									<CardItem>
										<Left>
											<Thumbnail
												source={{
													uri:
														'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
												}}
											/>
											<Body>
												<Text>Passionate Code Designs</Text>

												<Text note>******</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem style={{ height: '70%', width: '100%' }}>
										<WebView
											style={{ height: 50, width: '100%' }}
											javaScriptEnabled={true}
											source={{
												uri:
													'https://www.youtube.com/embed/I-a2IgUFa5c?rel=0&autoplay=0&showinfo=0&controls=1&enablejsapi=0&iv_load_policy=3&playsinline=1&showinfo=0'
											}}
											domStorageEnabled={true}
											allowsFullscreenVideo={true}
										/>
									</CardItem>
									<CardItem style={{ marginTop: -20 }}>
										<Left>
											<Button badge transparent>
												<Icon active name="thumbs-up" />
												<Text>12 Likes</Text>
											</Button>
										</Left>
										<Body>
											<Button transparent>
												<Icon active name="chatbubbles" />
												<Text>4 Comm</Text>
											</Button>
										</Body>
										<Right>
											<Text>11h ago</Text>
										</Right>
									</CardItem>
								</Card>
							</Content>
						) : (
							<Content>
								<Card>
									<CardItem>
										<Left>
											<Icon active name="logo-googleplus" style={{ color: 'red' }} />
											<Text>Google Plus</Text>
										</Left>

										<Right>
											<Icon name="arrow-forward" />
										</Right>
									</CardItem>
									<CardItem>
										<Left>
											<Icon active name="logo-facebook" style={{ color: '#007AFF' }} />
											<Text>Facebook</Text>
										</Left>

										<Right>
											<Icon name="arrow-forward" />
										</Right>
									</CardItem>
									<CardItem>
										<Left>
											<Icon active name="logo-instagram" style={{ color: '#007AFF' }} />
											<Text>Instagram</Text>
										</Left>

										<Right>
											<Icon name="arrow-forward" />
										</Right>
									</CardItem>
									<CardItem>
										<Left>
											<Icon active name="logo-twitter" style={{ color: '#007AFF' }} />
											<Text>Twitter</Text>
										</Left>

										<Right>
											<Icon name="arrow-forward" />
										</Right>
									</CardItem>
									<CardItem>
										<Left>
											<Icon active name="logo-linkedin" style={{ color: '#007AFF' }} />
											<Text>LinkedIn</Text>
										</Left>

										<Right>
											<Icon name="arrow-forward" />
										</Right>
									</CardItem>
									<CardItem>
										<Left>
											<Icon active name="logo-youtube" style={{ color: 'red' }} />
											<Text>Youtube</Text>
										</Left>

										<Right>
											<Icon name="arrow-forward" />
										</Right>
									</CardItem>
									<CardItem>
										<Left>
											<Icon active name="logo-pinterest" style={{ color: 'red' }} />
											<Text>Pinterest</Text>
										</Left>
										<Right>
											<Icon name="arrow-forward" />
										</Right>
									</CardItem>
								</Card>
							</Content>
						)}
					</Container>
				</Drawer>
			</Root>
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
