import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import Colors from "../../constants/colors";

export default styles = StyleSheet.create({
	listado: {
		backgroundColor: Colors.primary,
		padding: 15,
		width: "100%",
		alignItems: "center",
		flex: 1,
	},
	textNormal: {
		textAlign: "center",
		marginBottom: 5,
		fontWeight: "bold",
		color: Colors.textLight,
		fontSize: 20,
	},
	textInputs: {
		backgroundColor: Colors.light,
		paddingLeft: 15,
		marginBottom: 20,
		borderRadius: 0,
		width: 320,
		height: 40,
		fontSize: 16,
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
});
