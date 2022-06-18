import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "transparent",
	},
	textWrapper: {
		height: 40,
		flex: 1,
		paddingLeft: 30,
		paddingRight: 30,
		flexDirection: "row",
	},
	segmentTextWrapperSecondary: {
		flex: 1,
		alignItems: "center",
		backgroundColor: Colors.secondary,
		padding: 10,
	},
	textLight: {
		fontSize: 13,
		color: Colors.light,
	},
	textSecondary: {
		fontSize: 13,
		color: Colors.secondary,
	},
	segmentTextWrapperLight: {
		flex: 1,
		alignItems: "center",
		backgroundColor: Colors.light,
		padding: 10,
	},

	listado: {
		backgroundColor: Colors.primary,
		padding: 0,
		width: "100%",
		alignItems: "center",
		flex: 4,
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
		// borderBottomWidth: 1,
		// borderBottomColor: Colors.se,
		paddingLeft: 15,
		// marginBottom: 10,
		borderRadius: 0,
		width: 320,
		height: 40,
		fontSize: 16,
		color: Colors.dark,
	},
	btnContainer: {
		flexDirection: "row",
	},
	btn1: {
		marginTop: 20,
	},
	labelContainer: {
		padding: 10,
	},
	labelText: {
		color: Colors.light,
		fontFamily: "openSansBold",
	},
	tittleContainer: {
		padding: 0,
		paddingHorizontal: 30,
		margin: 0,
		backgroundColor: Colors.dark,
		width: "100%",
		marginBottom: 10,
	},
	tittle: {
		padding: 15,
		textAlign: "center",
		color: Colors.textLight,
	},
});
