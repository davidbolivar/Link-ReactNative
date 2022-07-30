import React, { useEffect } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import { useSelector, useDispatch } from "react-redux";
import { selectedMessage, selectAllMessages } from "../../../store/actions/message.action";

import { useFocusEffect } from "@react-navigation/native";

export default function MessageItem({ onHandlerModal }) {
	const dispatch = useDispatch();

	useFocusEffect(
		React.useCallback(() => {
			dispatch(selectAllMessages());
		}, [])
	);

	const messages = useSelector((state) => state.message.messages);

	const onHandlerSelect = (id) => {
		console.log("OnHandlerSelect", id);
		dispatch(selectedMessage(id));
	};

	// const onHandlerDelete = (id) => {};

	const renderItem = (data) => (
		<TouchableOpacity
			style={styles.containerLista}
			onLongPress={() => {
				onHandlerSelect(data.item);
				onHandlerModal(data.item.id);
			}}
		>
			<Text Text style={styles.textLista}>
				<Text style={styles.textListaNumber}>
					{data.item.id}. {data.item.method}: {data.item.target}
				</Text>
				{"\n"}
				<Text>{data.item.message}</Text>
				{"\n"}
				<Text style={styles.textListaLink}>{data.item.location}</Text>
			</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.flex1}>
			<FlatList data={messages} renderItem={renderItem} keyExtractor={(item) => item.id} />
		</View>
	);
}
