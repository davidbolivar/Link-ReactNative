import React from "react";
import { View } from "react-native";
import AppNavigator from "./navigation/index";
import styles from "./styles";

export default function Root() {
	return (
		<View style={styles.container}>
			<AppNavigator />
		</View>
	);
}
