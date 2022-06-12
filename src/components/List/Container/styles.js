import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

export default styles = StyleSheet.create({
	tituloLista: {
		textAlign: "center",
		marginBottom: 5,
		fontWeight: "bold",
		color: Colors.primary,
		fontSize: 20,
	},
	listadoItems: {
		borderTopColor: Colors.primary,
		borderTopWidth: 3,
		backgroundColor: Colors.light,
		padding: 15,
		alignItems: "center",
		width: "100%",
		flex: 1,
	},
});
