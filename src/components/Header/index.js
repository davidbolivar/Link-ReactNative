import { View, Image } from "react-native";
import { StyleSheet } from "react-native";
// import styles from "./styles.js";

export default function Header() {
	const styles = StyleSheet.create({
		image: {
			width: "100%",
			flex: 2,
		},
	});

	return <Image source={require("../../../assets/other/Logo2.png")} resizeMode="cover" style={styles.image}></Image>;
}
