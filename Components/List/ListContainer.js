import React, { useState } from "react";
import { Text, View } from "react-native";
import ModalItem from "../Modal.js";
import styles from "../../Styles.js";
import ListItem from "./ListItem.js";

export default function ListContainer(props) {
	const { listItem, setListItem } = props;
	// const [textItem, setTextItem] = useState();
	const [itemSelected, setItemSelected] = useState({});
	const [modalVisible, setModalVisible] = useState(false);

	console.log(listItem);

	const onHandlerDelete = (id) => {
		console.log("Item Eliminado");
		setListItem((currenItems) => currenItems.filter((item) => item.id !== id));
		setItemSelected({});
		setModalVisible(!modalVisible);
	};
	const onHandlerModal = (id) => {
		setItemSelected(listItem.filter((item) => item.id === id)[0]);
		setModalVisible(!modalVisible);
	};
	const closeModal = () => {
		setModalVisible(!modalVisible);
	};

	return (
		<>
			<View style={styles.listadoItems}>
				<Text style={styles.tituloLista}>MENSAJES ENVIADOS</Text>

				<ListItem onHandlerModal={onHandlerModal} listItem={listItem} />
			</View>

			<ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onCancel={closeModal} />
		</>
	);
}
