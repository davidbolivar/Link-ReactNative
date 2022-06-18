import React, { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import MainScreen from "./src/screens/Main";
import MessagesScreen from "./src/screens/Messages";

export default function App() {
	const [listItem, setListItem] = useState([{ id: 1, message: "Esto es una prueba", method: "email", target: "davidbolivarh@gmail.com" }]);
	const [goTo, setGoTo] = useState("MainScreen");

	let [fontsLoaded] = useFonts({
		openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
		openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
		openSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
		openSansMedium: require("./assets/fonts/OpenSans-Medium.ttf"),
		openSansMediumItalic: require("./assets/fonts/OpenSans-MediumItalic.ttf"),
		OpenSansSemiBoldItalic: require("./assets/fonts/OpenSans-SemiBoldItalic.ttf"),
	});

	if (!fontsLoaded) return <AppLoading />;

	console.log("GO TO", goTo);
	return (
		<>
			<StatusBar style="auto" />
			<View style={{ flex: 1 }}>
				{goTo === "MainScreen" && <MainScreen listItem={listItem} setListItem={setListItem} setGoTo={setGoTo} />}

				{goTo === "MessagesScreen" && <MessagesScreen setListItem={setListItem} listItem={listItem} setGoTo={setGoTo} />}
			</View>
		</>
	);
}
