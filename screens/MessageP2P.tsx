import React from 'react'
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

import Header from "../components/Messages/Header";
import Message from "../components/Messages/Message";

export default class MessageP2P extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	ComponentDidMount(){

	}
	render(){
		return(
			<View style={styles.Container}>
				<Header navigation={this.props.navigation} />
				<ScrollView>
					<Message />
				</ScrollView>
				<View style={styles.Footer}>
					<View style={styles.LeftButton}>
						<Ionicons name="ios-happy-outline" size={24} color="#06c" />
					</View>
					<View style={{width: "65%"}}>
						<TextInput style={styles.TextInput} placeholder="Message..." />
					</View>
					<View style={styles.RightButtons}>
						<View><Ionicons name="ios-mic-outline" size={24} color="#06c" /></View>
						<View style={{marginLeft: 10}}><Ionicons name="ios-add-outline" size={24} color="#06c" /></View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#f9f9f9"
	},
	Footer: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		borderTopColor: "#e6e6e6",
		borderTopWidth: 0.5
	},
	TextInput: {
		borderBottomWidth: 1,
		borderBottomColor: "#e6e6e6",
		fontSize: 12
	},
	LeftButton: {
		marginTop: 5,
	},
	RightButtons: {
		flexDirection: "row",
		marginTop: 5
	}
});