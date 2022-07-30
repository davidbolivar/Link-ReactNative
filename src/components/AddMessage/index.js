import React, { useState, useEffect } from "react";
import { Text, View, Button, TextInput, TouchableOpacity, Keyboard, Switch } from "react-native";
import styles from "./styles.js";
import * as SMS from "expo-sms";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, selectAllMessages } from "../../store/actions/message.action";
import * as Location from "expo-location";
import * as Contacts from "expo-contacts";

export default function AddMessage() {
	const dispatch = useDispatch();

	// DESPACHAMOS LOS MENSAJES PARA QUE AL CAMBIAR A LA LISTA ESTÉN DISPONIBLES
	dispatch(selectAllMessages());

	// SERVER_NUMBER ----------------------------------------------------------
	const SERVER_PHONE_NUMBER = "+5491126469206";
	const SMS_IDENTIFIER = "[LINK]";
	// Location ---------------------------------------------------------------
	const [locationInfo, setLocationInfo] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [shareLocation, setShareLocation] = useState(false);
	const toggleSwitch = () => setShareLocation((previousState) => !previousState);

	// Inputs ------------------------------------------------------------------
	const [messageInput, setMessageInput] = useState("");
	const [methodOption, setMethodOption] = useState("Whatsapp");
	const [targetInput, setTargetInput] = useState("");
	// Service select ----------------------------------------------------------
	const [whatsapp, setWhatsapp] = useState(true);
	const [email, setEmail] = useState(false);
	// Service label -----------------------------------------------------------
	const [targetTexts, setTargetTexts] = useState({ label: "TELÉFONO", placeholder: "Ej: +58412......." });

	// CONTACTS USE EFFECT ----------------------------------------------------
	useEffect(() => {
		(async () => {
			const { status } = await Contacts.requestPermissionsAsync();
			if (status === "granted") {
				const { data } = await Contacts.getContactsAsync({
					fields: [Contacts.Fields.Emails],
				});

				if (data.length > 0) {
					const contact = data[0];
					console.log("CANTIDAD DE CONTACTOS", data.length);
				}
			}
		})();
	}, []);

	// LOCATION USE EFFECT ----------------------------------------------------
	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocationInfo(location);
		})();
	}, []);

	const locationUrl = (locationInfo) => {
		if (locationInfo) return `https://www.google.com/maps/search/?api=1&query=${locationInfo.coords.latitude},${locationInfo.coords.longitude}`;
		else return null;
	};

	let text = "Esperando..";
	if (errorMsg) text = errorMsg;
	else if (locationInfo) text = "Lat: " + locationInfo.coords.latitude + " Lng: " + locationInfo.coords.longitude;

	const onHandlerChangeMessage = (message) => {
		setMessageInput(message);
	};

	const onHandlerChangeMethod = (method) => {
		setMethodOption(method);
		if (method === "Whatsapp") {
			setWhatsapp(true);
			setEmail(false);
			setTargetTexts({ label: "TELÉFONO", placeholder: "Ej: +58412......." });
		} else if (method === "Correo") {
			setEmail(true);
			setWhatsapp(false);
			setTargetTexts({ label: "CORREO ELECTRÓNICO", placeholder: "Ej: pedroperez@gmail.com" });
		}
	};

	const onHandlerChangeTarget = (target) => {
		setTargetInput(target);
	};

	const sendMessage = async () => {
		Keyboard.dismiss();
		console.log("SEND MESSAGE");
		if (messageInput != "" && methodOption != "" && targetInput != "") {
			const isAvailable = await SMS.isAvailableAsync();

			dispatch(addMessage({ message: messageInput, method: methodOption, target: targetInput, location: locationUrl(locationInfo) }));

			if (isAvailable) {
				console.log("SMS AVAILABLE");
				let message = `${SMS_IDENTIFIER}->${methodOption}->${targetInput}->${messageInput}`;
				if (locationInfo && shareLocation) message = `${message}->${locationInfo.coords.latitude},${locationInfo.coords.longitude}`;
				await SMS.sendSMSAsync(SERVER_PHONE_NUMBER, message);
			} else console.log("SMS not available");

			setMessageInput("");
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
						<Text style={whatsapp === true ? styles.textLight : styles.textSecondary}>Whatsapp</Text>
					</TouchableOpacity>
					<TouchableOpacity style={email === true ? styles.segmentTextWrapperSecondary : styles.segmentTextWrapperLight} onPress={() => onHandlerChangeMethod("Correo")}>
						<Text style={email === true ? styles.textLight : styles.textSecondary}>Correo electrónico</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.labelContainer}>
				<Text style={styles.labelText}>{targetTexts.label}</Text>
			</View>

			<TextInput keyboardType={methodOption == "Whatsapp" ? "phone-pad" : "email-address"} style={styles.textInputs} placeholder={targetTexts.placeholder} value={targetInput} onChangeText={onHandlerChangeTarget} />

			<View style={styles.labelContainer}>
				<Text style={styles.labelText}>MENSAJE:</Text>
			</View>

			<TextInput style={[styles.textInputs, { height: 80, padding: 10, textAlignVertical: "top" }]} numberOfLines={10} multiline={true} value={messageInput} onChangeText={onHandlerChangeMessage} />

			{/* SWITCH PARA ACEPTAR COMPARTIR UBICACIÓN */}
			<View style={[styles.labelContainer, styles.locationView]}>
				<Text style={styles.labelText}>COMPARTIR MI UBICACIÓN:</Text>
				<Switch trackColor={{ false: "#767577", true: "#029613" }} thumbColor={shareLocation ? "#ffffff" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={shareLocation} />
			</View>

			<View style={styles.btn1}>
				<Button title="Enviar mensaje" color="darkgray" onPress={sendMessage} />
			</View>

			{/* TEXT PARA MOSTRAR LAS COORDENADAS */}
			{/* <Text style={styles.labelContainer}>{text}</Text> */}

			<View></View>

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
