import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import Filter from "../components/Home/Filter";
import MessageGroup from "../components/Home/MessageGroup";
import Chat from "../components/Home/Chat";

export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render(){
		return(
			<View style={styles.Container}>
				<Filter />
				<MessageGroup title="Unread">
					<TouchableOpacity onPress={()=>{this.props.navigation.navigate("MessageP2P")}}>
						<Chat data={{status:"Busy", name: "Emre", avatar: {type:0,url:"https://www.w3schools.com/howto/img_avatar.png"}, count: 1, date:"19:31", lastMessage:"Git pushladın mı?", messageStatus:0}} />
					</TouchableOpacity>
					<Chat data={{status:"Online", name: "Elif", avatar: {type:0,url:"https://www.w3schools.com/howto/img_avatar2.png"}, count: 1, date:"18:09", lastMessage:"Pull requestlerini inceler misin?", messageStatus: 0}} />
				</MessageGroup>
				<MessageGroup title="Favourites">
					<Chat data={{status:"Channel", name: "Mobil Geliştiriciler", avatar: {type: 1,char: "G"}, count: 0, date:"Yesterday", lastMessage:"Furkan: Teşekkürler.", messageStatus: 0}} />
					<Chat data={{status:"Locked", name: "Mobil Test Ekibi", avatar: {type: 1,char: "T"}, count: 1, date:"Yesterday", lastMessage:"Kutay: Ana sayfa sorunsuz.", messageStatus: 0}} />
				</MessageGroup>
				<MessageGroup title="Conversation">
					<Chat data={{status:"Info", name: "EACHAT", avatar: {type: 1,char: "EA"}, count: 1, date:"Yesterday", lastMessage:"Güncelleme yaptığın için teşekkürler. İşte senin için güncelleme detayları: ...", messageStatus: 0}} />
					<Chat data={{status:"Busy", name: "Serhan", avatar: {type: 1,char: "S"}, count: 0, date:"Yesterday", lastMessage:"Akşam görüşelim.", messageStatus: 1}} />
					<Chat data={{status:"Idle", name: "Gülendam", avatar: {type: 1,char: "G"}, image: "https://i.pinimg.com/originals/f2/ca/52/f2ca5272a29aacc2f2ae9ad63f9f1a6b.jpg", count: 0, date:"20:05", lastMessage:"Sonra konuşuruz.",messageStatus: 0}} />
					<Chat data={{status:"Offline", name: "Yusuf", avatar: {type: 1,char: "Y"}, count: 0, date:"2 month ago", lastMessage:"Yusuf, naber?", messageStatus: 1}} />
				</MessageGroup>
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