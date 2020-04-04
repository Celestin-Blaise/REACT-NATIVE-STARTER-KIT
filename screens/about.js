import React, { Component } from 'react';
import { Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Tab,
	Tabs,
	View,
	TabHeading
} from 'native-base';
export default class About extends Component {
	render() {
		return (
			<Container>
				<ImageBackground
					style={{ flex: 1, height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,1)' }}
					resizeMode="cover"
					imageStyle={{ opacity: 0.6 }}
					source={{
						uri:
							'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
					}}
				>
					<Content>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('Screen2')}
							style={{
								color: 'white',
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Image
								style={{ height: 100, width: 100, marginVertical: '40%' }}
								resizeMode="cover"
								source={require('../assets/exporience.png')}
							/>
						</TouchableOpacity>
					</Content>
				</ImageBackground>
				<Tabs>
					<Tab
						heading={
							<TabHeading>
								<Icon name="ios-images" />
								<Text>Gallery</Text>
							</TabHeading>
						}
					>
						<ImageBackground
							style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,1)' }}
							resizeMode="cover"
							imageStyle={{ opacity: 0.4 }}
							source={{
								uri:
									'https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
							}}
						>
							<ScrollView>
								<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
								</View>
							</ScrollView>
						</ImageBackground>
					</Tab>
					<Tab
						heading={
							<TabHeading>
								<Icon name="ios-finger-print" />
							</TabHeading>
						}
					>
						<ImageBackground
							style={{ height: '100%', width: '100%' }}
							resizeMode="cover"
							imageStyle={{ opacity: 1 }}
							source={{
								uri:
									'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
							}}
						>
							<ScrollView>
								<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
								</View>
							</ScrollView>
						</ImageBackground>
					</Tab>
					<Tab
						heading={
							<TabHeading>
								<Icon name="apps" />
							</TabHeading>
						}
					>
						<ImageBackground
							style={{ height: '100%', width: '100%' }}
							resizeMode="cover"
							imageStyle={{ opacity: 1 }}
							source={{
								uri:
									'https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
							}}
						>
							<ScrollView>
								<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
									<View
										style={{
											height: 100,
											width: 100,
											margin: 10,
											borderColor: 'white',
											borderWidth: 5
										}}
									>
										<Image
											source={{
												uri:
													'https://images.unsplash.com/photo-1566024320539-94d7c5b8b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
											}}
											style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
										/>
									</View>
								</View>
							</ScrollView>
						</ImageBackground>
					</Tab>
				</Tabs>
			</Container>
		);
	}
}
