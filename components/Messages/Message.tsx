import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class MessageRight extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render(){
		return(
			<View style={styles.Container}>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#fff"
	}
});