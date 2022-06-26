import { Text, View, Button, Modal } from "react-native";
import styles from "./styles.js";

export default function ModalItem({ visible, item, onConfirm, onCancel, options }) {
	console.log("ITEM", item);
	return (
		<Modal animationType="slide" visible={visible}>
			<View style={styles.modalCentered}>
				<View style={styles.modalView}>
					<View style={styles.tituloModal}>
						<Text style={styles.textNormal}>{options.tittle}</Text>
					</View>
					<View style={styles.cuerpoModal}>
						<View>
							<Text>{options.content}</Text>
						</View>
						<View>
							<Text>{item.message}</Text>
						</View>
					</View>

					<View style={styles.btnContainer}>
						<View style={styles.botonModal}>
							<Button title={options.confirmButtonText} color="#65c4c9" onPress={() => onConfirm(item.id)} />
						</View>
						<View style={styles.botonModal}>
							<Button title={options.cancelButtonText} color="#00bcaa" onPress={() => onCancel()} />
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
}
