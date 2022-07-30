import React from "react";
import { View } from "react-native";
import AppNavigator from "./navigation/index";
import styles from "./styles";
import { db_init } from "./db/index";

const intit = db_init();
if (intit) console.log("DB Initialized");
else console.log("DB Error");

export default function Root() {
	return (
		<View style={styles.container}>
			<AppNavigator />
		</View>
	);
}
