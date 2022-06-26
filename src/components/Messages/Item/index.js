import React from "react";
import { Text, View, Button, FlatList } from "react-native";
import styles from "./styles.js";
import { useSelector, useDispatch } from "react-redux";

export default function MessageItem({ onHandlerModal }) {
	const dispatch = useDispatch();
	const messages = useSelector((state) => state.message.messages);
	const selected = useSelector((state) => state.message.selected);

	const renderItem = (data) => (
		<View style={styles.containerLista}>
			<Text style={styles.textLista}>
				#{data.item.id} - {data.item.method} enviado a {data.item.target}. {"\n"} Mensaje: {data.item.message}
			</Text>
			<View style={styles.btnContainer}>
				<View style={styles.btn1}>
					<Button title="Eliminar" color="#65c4c9" onPress={onHandlerModal.bind(this, data.item.id)} />
				</View>
				<View style={styles.btn1}>
					<Button title="Detalles" color="#00bcaa" />
				</View>
			</View>
		</View>
	);

	return (
		<View style={styles.flex1}>
			<FlatList data={messages} renderItem={renderItem} keyExtractor={(item) => item.id} />
		</View>
	);
}
