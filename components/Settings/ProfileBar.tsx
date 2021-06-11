import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class ProfileBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		};
	}
	render(){
		return(
			<View style={styles.Container}>
				<View style={styles.Content}>
          <Image source={{uri: "https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/39/1024x512/landscape-1475246706-hbz-mr-mrs-smith.jpg?resize=480:*"}} style={styles.Avatar} />
          <View style={styles.Infos}>
            <Text style={styles.Title}>Emre</Text>
            <Text style={styles.Subtitle}>memrearal#0001</Text>
            <Text style={styles.Subtitle}>+900000000000</Text>
          </View>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	Container: {
    marginTop: 20,
		height: 80,
		backgroundColor: "#f9f9f9",
		borderBottomWidth: 0.5,
		borderBottomColor: "#e6e6e6"
	},
	Content: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 10
	},
  Avatar: {
    margin: 10,
    height: 60,
    width: 60,
    borderRadius: 60
  },
  Infos: {
    flexDirection: "column"
  },
  Title: {
    color: "#000",
    fontWeight: "bold"
  },
  Subtitle: {
    color: "#000"
  },
  Button: {
    margin: 10
  }
})
