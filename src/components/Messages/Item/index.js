import React, { useEffect } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import { useSelector, useDispatch } from "react-redux";
import { selectedMessage } from "../../../store/actions/message.action";

export default function MessageItem({ onHandlerModal }) {
	const dispatch = useDispatch();
	const messages = useSelector((state) => state.message.messages);
	const selected = useSelector((state) => state.message.selected);

	useEffect(() => {}, [messages]);

	const onHandlerSelect = (id) => {
		console.log("OnHandlerSelect", id);
		dispatch(selectedMessage(id));
	};

	const onHandlerDelete = (id) => {};

	const renderItem = (data) => (
		<TouchableOpacity
			style={styles.containerLista}
			onLongPress={() => {
				onHandlerSelect(data.item);
				onHandlerModal(data.item.id);
			}}
		>
			<Text style={styles.textLista}>
				#{data.item.id} - {data.item.method} enviado a {data.item.target}. {"\n"} Mensaje: {data.item.message}
			</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.flex1}>
			<FlatList data={messages} renderItem={renderItem} keyExtractor={(item) => item.id} />
		</View>
	);
}
