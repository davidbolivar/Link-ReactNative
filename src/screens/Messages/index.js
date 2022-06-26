import React, { useState } from "react";
import { View, Button } from "react-native";
import MessagesContainer from "../../components/Messages/Container";
// import Header from "../../components/Header";
import ModalItem from "../../components/Modal";

export default function MessagesScreen({ navigation }) {
	const [itemSelected, setItemSelected] = useState({});

	const [modalVisible, setModalVisible] = useState(false);
	// const [messagesList, setMessagesList] = useState([]);

	const onHandlerConfirm = (id) => {
		console.log("Item Eliminado");
		setMessagesList((currenItems) => currenItems.filter((item) => item.id !== id));
		setItemSelected({});
		setModalVisible(!modalVisible);
	};
	const onHandlerModal = (id) => {
		console.log("ON HANDLER MODAL", id);
		// setItemSelected(messagesList.filter((item) => item.id === id)[0]);
		setModalVisible(!modalVisible);
	};
	const closeModal = () => {
		setModalVisible(!modalVisible);
	};

	return (
		<View style={{ flex: 1 }}>
			{/* <Header /> */}
			{/* <Button onPress={() => navigation.navigate("Main")} title="Ir al inicio" /> */}
			<MessagesContainer onHandlerModal={onHandlerModal} />
			<ModalItem
				onConfirm={onHandlerConfirm}
				item={itemSelected}
				visible={modalVisible}
				onCancel={closeModal}
				options={{
					tittle: "ATENCIÓN",
					content: "¿Desea Eliminar este mensaje?",
					confirmButtonText: "Eliminar",
					cancelButtonText: "Cancelar",
				}}
			/>
		</View>
	);
}
