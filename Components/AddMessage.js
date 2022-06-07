import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import styles from "../Styles.js";

export default function AddMessage({ setListItem }) {
	const [messageInput, setMessageInput] = useState("");
	const [methodInput, setMethodInput] = useState("");
	const [targetInput, setTargetInput] = useState("");

	const onHandlerChangeMessage = (message) => {
		setMessageInput(message);
	};
	const onHandlerChangeMethod = (method) => {
		setMethodInput(method);
	};

	const onHandlerChangeTarget = (target) => {
		setTargetInput(target);
	};

	const sendMessage = () => {
		console.log("SEND MESSAGE");
		if (messageInput != "" && methodInput != "" && targetInput != "") {
			setListItem((messages) => [...messages, { id: messages[messages.length - 1].id + 1, message: messageInput, method: methodInput, target: targetInput }]);
			setMessageInput("");
			setMethodInput("");
			setTargetInput("");
		}
	};

	return (
		<>
			<View>
				<View style={styles.listado}>
					<Text style={styles.textNormal}>NUEVO MENSAJE</Text>
					<TextInput style={styles.textInputs} placeholder="Método de envío" value={methodInput} onChangeText={onHandlerChangeMethod} />
					<TextInput style={styles.textInputs} placeholder="Email / Número" value={targetInput} onChangeText={onHandlerChangeTarget} />
					<TextInput style={styles.textInputs} numberOfLines={10} multiline={true} placeholder="Mensaje" value={messageInput} onChangeText={onHandlerChangeMessage} />
					<View style={styles.btnContainer}>
						{/* <View style={styles.btn1}>
							<Button title="Foto" color="#65c4c9" />
						</View> */}
						<View style={styles.btn1}>
							<Button title="Enviar" color="darkgray" onPress={sendMessage} />
						</View>
					</View>
				</View>
			</View>
		</>
	);
}
