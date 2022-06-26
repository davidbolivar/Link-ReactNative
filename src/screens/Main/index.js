import React from "react";
import { View, Button } from "react-native";
import AddMessage from "../../components/AddMessage";
// import Header from "../../components/Header";

export default function MainScreen({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			{/* <Header /> */}
			{/* <Button onPress={() => navigation.navigate("Messages")} title="Ver mensajes" /> */}
			<AddMessage />
		</View>
	);
}
