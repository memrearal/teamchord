import React from 'react'
import { View, TouchableOpacity, Image, Dimensions, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons'; 

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		};
	}
	render(){
		return(
			<View style={styles.HeaderContainer}>
				<View style={styles.HeaderContent}>
					<View style={styles.Left}>
						<TouchableOpacity style={styles.Button} onPress={()=>{this.props.navigation.goBack()}}>
							<Ionicons name="ios-chevron-back" size={20} color="#06c" />
						</TouchableOpacity>
						<Image source={{uri: "https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/39/1024x512/landscape-1475246706-hbz-mr-mrs-smith.jpg?resize=480:*"}} style={styles.UserAvatar} />
					</View>
					<View style={styles.Center}>
						<View style={styles.UserInfo}>
							<Text style={styles.Title}>Username</Text>
							<Text style={styles.Status}>Online</Text>
						</View>
					</View>
					<View style={styles.ButtonWrapper}>
						<TouchableOpacity style={styles.ButtonMR2}>
							<Ionicons name="ios-call-outline" size={20} color="#06c" />
						</TouchableOpacity>
						<TouchableOpacity style={styles.ButtonMR2}>
							<Ionicons name="ios-videocam-outline" size={20} color="#06c" />
						</TouchableOpacity>
						<TouchableOpacity style={styles.Button}>
							<Ionicons name="ios-ellipsis-horizontal-outline" size={20} color="#06c" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}
const fullWidth = Dimensions.get("window").width;
const buttonWidth = (fullWidth-40) / 8;
const styles = StyleSheet.create({
	HeaderContainer: {
		height: 90,
		paddingTop: Constants.statusBarHeight-30,
		backgroundColor: "#f9f9f9",
		borderBottomWidth: 0.5,
		borderBottomColor: "#e6e6e6"
	},
	HeaderContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 5,
		marginTop: 40,
		marginHorizontal: 20
	},
	Left: {
		flexDirection: "row"
	},
	ButtonWrapper: {
		flexDirection: "row",
	},
	Button: {
		height: 40,
	},
	ButtonMR2: {
		height: 40,
		marginRight: 20
	},
	Center: {
		
	},
	UserInfo: {
		right: 20,
		marginTop: -10,
		flexDirection: "column",
		height: 40,
	},
	UserAvatar: {
		marginTop: -10,
		marginLeft: 10,
		height: 40,
		width: 40,
		borderRadius: 40
	},
	Title: {
		fontSize: 14,
		color: "#000"
	},
	Status: {
		color: "#06c",
		fontSize: 12
	}
})