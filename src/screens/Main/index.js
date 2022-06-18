import React from "react";
import { View } from "react-native";
import AddMessage from "../../components/AddMessage";
import ChangeScreenButton from "../../components/ChangeScreenButton";
import Header from "../../components/Header";

export default function MainScreen({ listItem, setListItem, goTo, setGoTo }) {
	return (
		<View style={{ flex: 1 }}>
			<Header />
			<AddMessage setListItem={setListItem} />
			{listItem.length > 0 && <ChangeScreenButton screen={"MessagesScreen"} text={"Ir a mensajes enviados"} setGoTo={setGoTo} goTo={goTo} />}
		</View>
	);
}
