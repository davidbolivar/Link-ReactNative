import React from "react";
import { Text, View } from "react-native";
import styles from "./styles.js";
import MessageItem from "../Item";

export default function MessagesContainer({ onHandlerModal }) {
	return (
		<View style={styles.listadoItems}>
			{/* <Text style={styles.tituloLista}>MENSAJES ENVIADOS</Text> */}
			<MessageItem onHandlerModal={onHandlerModal} />
		</View>
	);
}
