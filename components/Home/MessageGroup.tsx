import React from 'react'
import Styles from '../../constants/Styles';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

export default class MessageGroup extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render(){
		const { title, children } = this.props;
		return(
			<View style={styles.Container}>
				<View style={styles.Header}>
					<Text style={styles.title}>
						{title}
					</Text>
				</View>
				<View style={styles.Content}>
					{children}
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	Container: {
		paddingVertical: 10
	},
	Header: {
		paddingHorizontal: 10,
	},
	Title: {
		fontWeight: "bold",
		fontSize: 30,
		color: "#000"
	},
	Content: {

	}
	
});