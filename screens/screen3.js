import React, { Component } from 'react';
import {
	Image,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
	TouchableWithoutFeedback
} from 'react-native';
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
	Right,
	Center,
	Form,
	Item,
	Input,
	Label,
	List,
	ListItem,
	View
} from 'native-base';

const data = [
	{
		name: 'CELESTIN BLAISE',
		email: 'blaze@blaze.net',
		password: '20005'
	}
];

export default class Screen3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			dataUpdated: false
		};
	}

	addContact = () => {
		data.push(this.state);
		this.setState({
			dataUpdated: !this.state.dataUpdated
		});
	};
	render() {
		return (
			<Container>
				<Header />
				<ImageBackground
					style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
					resizeMode="cover"
					source={{
						uri:
							'https://images.unsplash.com/photo-1566550747935-21b7f2464b57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
					}}
				>
					<ScrollView>
						<Content>
							<Form
								style={{
									backgroundColor: '#fff',
									height: 420,
									marginHorizontal: 20,
									marginVertical: 60,
									borderBottomRightRadius: 50,
									borderTopLeftRadius: 50,

									borderColor: 'red',
									borderWidth: 10
								}}
							>
								<Item
									floatingLabel
									style={{ marginHorizontal: 20, marginBottom: 30, marginTop: 30 }}
								>
									<Label style={{ paddingBottom: 30 }}>Username</Label>
									<Input
										onChangeText={name => this.setState({ name })}
										style={{ borderBottomColor: '#057AFF', borderBottomWidth: 5 }}
									/>
								</Item>
								<Item floatingLabel style={{ marginHorizontal: 20, marginBottom: 30 }}>
									<Label>Email</Label>
									<Input
										onChangeText={email => this.setState({ email })}
										style={{ borderBottomColor: '#057AFF', borderBottomWidth: 5 }}
									/>
								</Item>
								<Item floatingLabel style={{ marginHorizontal: 20, marginBottom: 30 }}>
									<Label>Password</Label>
									<Input
										onChangeText={password => this.setState({ password })}
										style={{ borderBottomColor: '#057AFF', borderBottomWidth: 5 }}
									/>
								</Item>

								<Button
									block
									style={{
										marginTop: 20,
										borderRadius: 25,
										width: '80%',
										marginHorizontal: '10%'
									}}
									onPress={this.addContact}
								>
									<Text>Submit</Text>
								</Button>
							</Form>

							<List style={{ marginBottom: '20%' }}>
								{this.state.dataUpdated &&
									data
										.map((item, key) => {
											return (
												<TouchableOpacity key={key}>
													<ListItem
														onPress={() =>
															this.props.navigation.navigate('stackNav', {
																screen: 'details',
																params: { item }
															})
														}
														avatar
														style={{
															backgroundColor: 'white',
															marginHorizontal: '5%',
															paddingHorizontal: '5%',
															marginBottom: 20
														}}
														key={key}
													>
														<Left>
															<Thumbnail
																source={{
																	uri:
																		'https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
																}}
															/>
														</Left>
														<Body>
															<Text>{item.name}</Text>
															<Text note>{item.email}</Text>
															<Text note>{item.password}</Text>

															<Text note>3:43 pm</Text>
														</Body>
													</ListItem>
												</TouchableOpacity>
											);
										})
										.reverse()}
								{this.state.dataUpdated == false &&
									data
										.map((item, key) => {
											return (
												<TouchableOpacity key={key}>
													<ListItem
														onPress={() =>
															this.props.navigation.navigate('stackNav', {
																screen: 'details',
																params: { item }
															})
														}
														avatar
														style={{
															backgroundColor: 'white',
															marginHorizontal: '5%',
															paddingHorizontal: '5%',
															marginBottom: 20
														}}
														key={key}
													>
														<Left>
															<Thumbnail
																source={{
																	uri:
																		'https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
																}}
															/>
														</Left>
														<Body>
															<Text>{item.name}</Text>
															<Text note>{item.email}</Text>
															<Text note>{item.password}</Text>

															<Text note>3:43 pm</Text>
														</Body>
													</ListItem>
												</TouchableOpacity>
											);
										})
										.reverse()}
							</List>
						</Content>
					</ScrollView>
				</ImageBackground>
			</Container>
		);
	}
}
