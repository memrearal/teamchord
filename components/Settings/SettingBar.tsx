import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class SettingBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		};
	}
	render(){
    const {key,value} = this.props.Data;
		return(
			<View style={styles.Container}>
				<View style={styles.Content}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.Title}>{key}: </Text>
            <Text style={styles.Subtitle}>{value}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.Button}>
              <Ionicons name="ios-chevron-forward" size={20} color="#06c" />
            </TouchableOpacity>
          </View>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	Container: {
    marginTop: 10,
		backgroundColor: "#f9f9f9",
		borderBottomWidth: 0.5,
		borderBottomColor: "#e6e6e6"
	},
	Content: {
		flexDirection: "row",
    justifyContent: "space-between",
		alignItems: "center",
    paddingHorizontal: 20
	},
  Title: {
    color: "#000",
    fontWeight: "bold"
  },
  Subtitle: {
    color: "#000"
  },
  Button: {
    paddingVertical: 10,
    paddingLeft: 10
  }
})
