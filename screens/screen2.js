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
export default class Screen2 extends Component {
	render() {
		return (
			<Container>
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
							style={{ height: '100%', width: '100%' }}
							resizeMode="cover"
							source={{
								uri:
									'https://images.unsplash.com/photo-1528916138893-06acfc566dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
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
				</Tabs>
			</Container>
		);
	}
}
