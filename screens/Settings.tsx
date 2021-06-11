import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import ProfileBar from "../components/Settings/ProfileBar";
import SettingBar from "../components/Settings/SettingBar";

export default class Settings extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render(){
		return(
			<View style={styles.Container}>
        <ProfileBar />
        <SettingBar Data={{key: "Name",value:"Emre"}} />
        <SettingBar Data={{key: "Username",value:"memrearal#0001"}} />
        <SettingBar Data={{key: "Phone Number",value:"+900000000000"}} />
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
