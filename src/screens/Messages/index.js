import React, { useState } from "react";
import { View } from "react-native";
import ListContainer from "../../components/List/Container";
import ChangeScreenButton from "../../components/ChangeScreenButton";
import Header from "../../components/Header";

export default function MessagesScreen({ listItem, setListItem, goTo, setGoTo }) {
	return (
		<View style={{ flex: 1 }}>
			<Header />
			<ListContainer listItem={listItem} setListItem={setListItem} />
			<ChangeScreenButton screen={"MainScreen"} setGoTo={setGoTo} text={"Enviar un nuevo mensaje"} goTo={goTo} />
		</View>
	);
}
