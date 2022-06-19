import React, { useState } from "react";
import { View, Button } from "react-native";
import ListContainer from "../../components/List/Container";
import Header from "../../components/Header";

export default function MessagesScreen({ navigation }) {
	const [listItem, setListItem] = useState([{ id: 1, message: "Esto es una prueba", method: "email", target: "davidbolivarh@gmail.com" }]);
	return (
		<View style={{ flex: 1 }}>
			<Header />
			<Button onPress={() => navigation.navigate("Main")} title="Ir al inicio" />
			<ListContainer listItem={listItem} setListItem={setListItem} />
		</View>
	);
}
