import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import AppNavigator from "./navigation/main";

export default function Root() {
	const [listItem, setListItem] = useState([{ id: 1, message: "Esto es una prueba", method: "email", target: "davidbolivarh@gmail.com" }]);
	const [goTo, setGoTo] = useState("MainScreen");

	console.log("GO TO", goTo);
	return (
		<View style={styles.container}>
			<AppNavigator />
		</View>
	);
}
