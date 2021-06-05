import React from 'react'
import Styles from '../../constants/Styles';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Ionicons, Feather  } from '@expo/vector-icons'; 

export default class Chat extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	renderStatus(status){
		if(["Online","Offline","Idle","Busy"].includes(status)){
			return(
				<View style={[styles.Status, status == "Online" ? styles.StatusOnline : status == "Offline" ? styles.StatusOffline : status == "Idle" ? styles.StatusIdle : status == "Busy" ? styles.StatusBusy : status == "Channel" ? styles.StatusChannel : status == "Locked" ? styles.StatusLocked : styles.StatusInfo]} />
			);
		}else{
			if(status == "Channel"){
				return(
					<Feather name="hash" size={14} style={{marginTop: 4,marginRight: 4}} />	
				);
			}else if(status == "Locked"){
				return(
					<Ionicons name="ios-lock-closed-outline" style={{marginTop: 4,marginRight: 4}} size={14} />
				);
			}else{
				return(
					<Ionicons name="ios-information-circle-outline" style={{marginTop:4,marginRight: 4}} size={14} />
				);
			}
		}
	}
	render(){
		const { status, name, count, avatar, date, lastMessage, messageStatus } = this.props.data;
		return(
			<View style={styles.Container}>
				<View style={styles.Avatar}>
					{avatar.type == 0 ? <Image source={{uri: avatar.url}} style={styles.AvatarImage} /> : <Text style={styles.AvatarChar}>{avatar.char}</Text> }
				</View>
				<View style={styles.Content}>
					<View style={styles.TopRow}>
						{this.renderStatus(status)}
						<Text style={styles.Title}>{name}</Text>
						<Text style={styles.Date}>{date}</Text>
					</View>
					<View style={styles.BottomRow}>
						<Text style={styles.LastMessage}>{messageStatus==1 ? <Ionicons name="checkmark-outline" style={{marginTop:4,marginRight: 4}} size={14} /> : messageStatus==2 ? <Ionicons name="checkmark-done-outline" style={{marginTop:4,marginRight: 4}} size={14} /> : null} {lastMessage}</Text>
						{count > 0 ? <Text style={styles.Count}>{count}</Text> : null}
					</View>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	Container: {
		margin: 5,
		flexDirection: "row"
	},
	Avatar: {
		padding: 5
	},
	AvatarImage: {
		width: 50,
		height: 50,
		borderRadius: 5
	},
	AvatarChar: {
		backgroundColor: "#e2ab52",
		color: "#fff",
		textAlign: "center",
		width: 50,
		height: 50,
		paddingTop: 8,
		fontSize: 25,
		borderRadius: 5
	},
	Content: {
		flexDirection: "column",
		margin: 5,
	},
	TopRow: {
		flexDirection: "row",
		alignSelf: "stretch"
	},
	Status: {
		marginTop: 5,
		marginRight: 4,
		width: 12,
		height: 12,
		borderRadius: 12
	},
	StatusOnline: {
		backgroundColor: "#32dfa7"
	},
	StatusOffline: {
		backgroundColor: "#c9cdd0"
	},
	StatusIdle: {
		backgroundColor: "#fad701"
	},
	StatusBusy: {
		backgroundColor: "#ff2d56"
	},
	Title: {
		fontWeight: "bold",
		flexWrap: "nowrap",
		fontSize: 16,
		color: "#000",
		width: Dimensions.get("window").width-185
	},
	Date: {
		textAlign: "right",
		width: 80,
		fontSize: 14,
		color: "#06c"
	},
	BottomRow: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	LastMessage: {
		color: "#666",
		maxWidth: Dimensions.get("window").width-140
	},
	Count: {
		backgroundColor: "#06c",
		color: "#fff",
		width: 25,
		height: 25,
		borderRadius: 5,
		paddingHorizontal: 8,
		paddingVertical: 2
	}
});