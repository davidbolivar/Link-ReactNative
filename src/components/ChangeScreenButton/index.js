import React from "react";
import { View, Button } from "react-native";
import styles from "./styles.js";

export default function ChangeScreenButton({ screen, text, setGoTo }) {
	return (
		<View style={styles.container}>
			<Button title={text} color="darkgray" onPress={() => setGoTo(screen)} />
		</View>
	);
}
