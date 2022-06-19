import { StyleSheet } from "react-native";
import { Colors } from "../../constants/themes";

export default styles = StyleSheet.create({
	btnContainer: {
		flexDirection: "row",
	},

	textNormal: {
		textAlign: "center",
		marginBottom: 5,
		fontWeight: "bold",
		color: Colors.textLight,
		fontSize: 20,
	},

	modalCentered: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.light,
	},
	modalView: {
		borderWidth: 1,
		borderRadius: 5,
		borderColor: Colors.light,
		width: 250,
		height: 150,
		backgroundColor: Colors.light,
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
	},
	tituloModal: {
		flex: 4,
		backgroundColor: Colors.light,
		width: "100%",
		color: Colors.textLight,
		alignItems: "center",
		justifyContent: "space-around",
		flexDirection: "row",
		textAlignVertical: "center",
	},
	cuerpoModal: {
		flex: 7,
		justifyContent: "center",
		alignItems: "center",
	},

	botonModal: {
		width: 100,
		flex: 2,
		marginHorizontal: 5,
		paddingBottom: 15,
		paddingHorizontal: 5,
		justifyContent: "center",
	},
});
