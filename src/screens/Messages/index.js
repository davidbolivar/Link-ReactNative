import React, { useState } from "react";
import { View } from "react-native";
import MessagesContainer from "../../components/Messages/Container";
// import Header from "../../components/Header";
import ModalItem from "../../components/Modal";
import { deleteMessage } from "../../store/actions/message.action";
import { useSelector, useDispatch } from "react-redux";

export default function MessagesScreen() {
	const dispatch = useDispatch();

	const selectedMessage = useSelector((state) => state.message.selected);

	const [modalVisible, setModalVisible] = useState(false);

	const onHandlerConfirm = () => {
		console.log("Item Eliminado");
		setModalVisible(!modalVisible);
		dispatch(deleteMessage(selectedMessage.id));
	};

	const onHandlerModal = (id) => {
		console.log("ON HANDLER MODAL", id);
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
			{selectedMessage && (
				<ModalItem
					onConfirm={onHandlerConfirm}
					item={selectedMessage}
					visible={modalVisible}
					onCancel={closeModal}
					options={{
						tittle: "ATENCIÓN",
						content: "¿Desea Eliminar este mensaje?",
						confirmButtonText: "Eliminar",
						cancelButtonText: "Cancelar",
					}}
				/>
			)}
		</View>
	);
}
