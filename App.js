import React from "react";
import Root from "./src";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
	let [loaded] = useFonts({
		openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
		openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
		openSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
		openSansMedium: require("./assets/fonts/OpenSans-Medium.ttf"),
		openSansMediumItalic: require("./assets/fonts/OpenSans-MediumItalic.ttf"),
		OpenSansSemiBoldItalic: require("./assets/fonts/OpenSans-SemiBoldItalic.ttf"),
	});

	if (!loaded) return <ActivityIndicator />;

	return <Root />;
}
