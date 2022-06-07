import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Components/Header.js";
import MainScreen from "./Components/MainScreen.js";

export default function App() {
	return (
		<>
			<StatusBar style="auto" />

			<View style={{ flex: 1 }}>
				<Header texto={"LINK - ALWAYS CONNECTED"} />
				<MainScreen />
			</View>
		</>
	);
}
