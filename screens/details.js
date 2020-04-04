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
export default class Details extends Component {
	render() {
		return (
			<Container>
				<ImageBackground
					style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
					resizeMode="cover"
					source={{
						uri:
							'https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
					}}
				>
					<ScrollView>
						<Content>
							<List style={{ marginBottom: '20%', marginTop: '20%' }}>
								<TouchableOpacity>
									<ListItem
										avatar
										style={{
											backgroundColor: 'white',
											marginHorizontal: '5%',
											paddingHorizontal: '5%',
											marginBottom: 5
										}}
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
											<Text>Name:{this.props.route.params.item.name}</Text>
											<Text note>{this.props.route.params.item.email}</Text>
											<Text note>{this.props.route.params.item.password}</Text>
										</Body>
										<Right>
											<Text note>3:43 pm</Text>
										</Right>
									</ListItem>
								</TouchableOpacity>
							</List>
						</Content>
					</ScrollView>
				</ImageBackground>
			</Container>
		);
	}
}
