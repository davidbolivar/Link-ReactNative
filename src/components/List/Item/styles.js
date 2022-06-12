import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

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

	containerLista: {
		marginVertical: 10,
	},
	textLista: {
		marginBottom: 5,
		marginTop: 5,
		fontWeight: "bold",
		color: Colors.secondary,
		fontSize: 14,
		textAlign: "auto",
		alignContent: "flex-end",
		height: 60,
		// backgroundColor: "#F1EEEE",
		textAlignVertical: "center",
		paddingStart: 10,
		padding: 5,
		marginBottom: 10,
		borderBottomWidth: 2,
		borderBottomColor: Colors.primary,
		borderRadius: 5,
		width: 320,
		fontWeight: "normal",
	},
});
