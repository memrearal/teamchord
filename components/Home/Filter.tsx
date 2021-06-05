import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Ionicons } from '@expo/vector-icons'; 

export default class Sort extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render(){
		return(
			<View style={styles.Container}>
				<Text style={styles.Sort}>Sort By Unread</Text>
				<TouchableOpacity style={styles.Icon}>
					<Ionicons name="ios-swap-vertical-outline" size={20} color="#666" />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Container: {
		height: 40,
		borderBottomWidth: 0.5,
		borderBottomColor: "#e6e6e6",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	Sort: {
		margin: 5,
		paddingVertical: 5,
		paddingHorizontal: 15,
		fontSize: 12,
		color: "#666"
	},
	Icon: {
		margin: 5,
		paddingVertical: 5,
		paddingHorizontal: 15
	}
});