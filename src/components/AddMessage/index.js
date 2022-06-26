import React, { useEffect, useState } from "react";
import { Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import * as SMS from "expo-sms";

export default function AddMessage({ setMessageItem }) {
	const [messageInput, setMessageInput] = useState("");
	const [methodOption, setMethodOption] = useState("");
	const [targetInput, setTargetInput] = useState("");
	const [whatsapp, setWhatsapp] = useState(true);
	const [email, setEmail] = useState(false);
	const [targetTexts, setTargetTexts] = useState({ label: "TELÉFONO", placeholder: "Ej: +58412......." });

	useEffect(() => {
		setWhatsapp(true);
		setEmail(false);
	}, []);

	const onHandlerChangeMessage = (message) => {
		setMessageInput(message);
	};

	const onHandlerChangeMethod = (method) => {
		setMethodOption(method);
		if (method === "Whatsapp") {
			setWhatsapp(true);
			setEmail(false);
			setTargetTexts({ label: "TELÉFONO", placeholder: "Ej: +58412......." });
		} else if (method === "Email") {
			setEmail(true);
			setWhatsapp(false);
			setTargetTexts({ label: "CORREO ELECTRÓNICO", placeholder: "Ej: pedroperez@gmail.com" });
		}
	};

	const onHandlerChangeTarget = (target) => {
		setTargetInput(target);
	};

	const sendMessage = async () => {
		console.log("SEND MESSAGE");
		if (messageInput != "" && methodOption != "" && targetInput != "") {
			setMessageItem((messages) => [...messages, { id: messages[messages.length - 1]?.id + 1 || 1, message: messageInput, method: methodOption, target: targetInput }]);

			const isAvailable = await SMS.isAvailableAsync();
			if (isAvailable) {
				console.log("SMS AVAILABLE");
				const targets = ["584120663036"];
				const message = `${methodOption}->${targetInput}->${messageInput}`;
				const { result } = await SMS.sendSMSAsync(targets, message);
				console.log("RESULT", result);
			} else console.log("SMS not available");

			setMessageInput("");
			setMethodOption("");
			setTargetInput("");
		}
	};

	return (
		<View style={styles.listado}>
			<View style={styles.tittleContainer}>
				<Text style={styles.tittle}>Envía Whatsapps y correos electrónicos a través de SMS y sin necesidad de internet</Text>
			</View>

			<View style={styles.labelContainer}>
				<Text style={styles.labelText}>DESEO ENVIAR UN</Text>
			</View>
			<View style={styles.container}>
				<View style={styles.textWrapper}>
					<TouchableOpacity style={whatsapp === true ? styles.segmentTextWrapperSecondary : styles.segmentTextWrapperLight} onPress={() => onHandlerChangeMethod("Whatsapp")}>
						<Text keyboardType="numeric" style={whatsapp === true ? styles.textLight : styles.textSecondary}>
							Whatsapp
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={email === true ? styles.segmentTextWrapperSecondary : styles.segmentTextWrapperLight} onPress={() => onHandlerChangeMethod("Email")}>
						<Text style={email === true ? styles.textLight : styles.textSecondary}>Correo electrónico</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.labelContainer}>
				<Text style={styles.labelText}>{targetTexts.label}</Text>
			</View>

			<TextInput keyboardType="numeric" style={styles.textInputs} placeholder={targetTexts.placeholder} value={targetInput} onChangeText={onHandlerChangeTarget} />

			<View style={styles.labelContainer}>
				<Text style={styles.labelText}>MENSAJE:</Text>
			</View>

			<TextInput style={[styles.textInputs, { height: 80, padding: 10, textAlignVertical: "top" }]} numberOfLines={10} multiline={true} value={messageInput} onChangeText={onHandlerChangeMessage} />

			<View style={styles.btn1}>
				<Button title="Enviar mensaje" color="darkgray" onPress={sendMessage} />
			</View>

			{/* <Text style={styles.textNormal}>NUEVO MENSAJE</Text>
			<TextInput style={styles.textInputs} placeholder="Método de envío" value={methodOption} onChangeText={onHandlerChangeMethod} />
			<TextInput style={styles.textInputs} placeholder="Email / Número" value={targetInput} onChangeText={onHandlerChangeTarget} />
			<TextInput style={styles.textInputs} numberOfLines={10} multiline={true} placeholder="Mensaje" value={messageInput} onChangeText={onHandlerChangeMessage} />
			<View style={styles.btnContainer}> */}
			{/* <View style={styles.btn1}>
							<Button title="Foto" color="#65c4c9" />
						</View> */}
			{/* <View style={styles.btn1}>
					<Button title="Enviar" color="darkgray" onPress={sendMessage} />
				</View> */}
			{/* </View> */}
		</View>
	);
}
