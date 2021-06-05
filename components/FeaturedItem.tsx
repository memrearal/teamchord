import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
export default class FeaturedItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: false
		}
	}
	render(){
		return(
			<View style={styles.Container}>
				<View style={styles.Content}>
					<ImageBackground source={{uri: "https://storage.kucukoteller.com.tr/2019/04/27/1556351618696820.jpg"}} style={styles.Image}>
						<Text style={styles.Point}>5.5 <Ionicons name="star" size={12} color="white" /></Text>
						<Text style={styles.FavouriteButton}><Ionicons name="heart" size={18} color="white" /></Text>
					</ImageBackground>
					<View style={styles.Infos}>
						<View style={styles.InfoLeft}>
							<Text style={styles.Title}>Sahil Hotel</Text>
							<Text style={styles.SubTitle}>Yalıkavak</Text>
						</View>
						<View style={styles.InfoRight}>
							<Text style={styles.Price}>255$</Text>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	Container: {
		height: 200,
		width: 250,
		borderRadius: 5,
		borderWidth: 0.5,
		borderColor: "#e6e6e6"
	},
	Content: {
		flexDirection: "column"
	},
	Image: {
		height: 150,
		width: 250,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		overflow: "hidden",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	Point: {
		margin: 10,
		paddingHorizontal: 5,
		width: 45,
		height: 20,
		backgroundColor: "#10b619",
		borderRadius: 5,
		color: "#fff"
	},
	FavouriteButton: {
		margin: 10,
		paddingHorizontal: 5,
		height: 20,
		borderRadius: 5,
		fontSize: 18,
		color: "#fff"
	},
	Infos: {
		zIndex: 999,
		flexDirection: "row"
	},
	InfoLeft: {
		width: 200,
		height: 50,
		flexDirection: "column",
		padding: 5
	},
	InfoRight: {
		width: 50,
		height: 50,
		padding: 5,
		justifyContent: "center",
		alignItems: "center"
	},
	Title: {
		fontWeight: "bold",
		color: "#000"
	},
	SubTitle: {
			
		color: "#949494"
	},
	Price: {
		fontWeight: "bold",
		color: "#000"
	}
})