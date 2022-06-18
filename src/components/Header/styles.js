import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default styles = StyleSheet.create({
	headerContainer: {
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		// height: 90,
		// paddingTop: 40,
		borderBottomColor: Colors.textDark,
		borderBottomWidth: 4,
	},
	textHeader: {
		color: Colors.primary,
		// fontWeight: "bold",
		fontSize: 22,
		// fontStyle: "italic",
		fontFamily: "OpenSansSemiBoldItalic",
	},
});
