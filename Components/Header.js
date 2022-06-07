import { Text, View } from "react-native";
import styles from "../Styles.js";

export default function Header(props) {
	const { texto } = props;
	return (
		<>
			<View style={styles.headerContainer}>
				<Text style={styles.textHeader}>{texto}</Text>
			</View>
		</>
	);
}
