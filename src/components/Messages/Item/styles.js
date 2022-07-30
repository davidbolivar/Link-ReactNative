import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/themes";

export default styles = StyleSheet.create({
	flex1: {
		flex: 1,
	},
	btnContainer: {
		flexDirection: "row",
	},
	btn1: {
		width: 150,
		marginHorizontal: 5,
		elevation: 0,
		shadowColor: Colors.shadow,
	},
	textListaLink: {
		color: Colors.primary,
		textDecorationLine: "underline",
		fontSize: 9,
	},
	textListaNumber: {
		color: Colors.secondary,
		fontWeight: "bold",
	},
	containerLista: {
		marginVertical: 2,
	},
	textLista: {
		// marginBottom: 5,
		marginTop: 5,
		fontWeight: "bold",
		color: Colors.secondary,
		fontSize: 12,
		height: 70,
		padding: 5,
		borderBottomWidth: 1,
		borderBottomColor: Colors.primary,
		width: 320,
		fontWeight: "normal",
	},
});
