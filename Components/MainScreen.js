import React, { useState } from "react";
import AddMessage from "./AddMessage.js";
import ListContainer from "./List/ListContainer.js";

export default function MainScreen() {
	const [listItem, setListItem] = useState([{ id: 1, message: "Esto es una prueba", method: "Correo", target: "davidbolivarh@gmail.com" }]);
	return (
		<>
			<AddMessage setListItem={setListItem} />
			<ListContainer listItem={listItem} setListItem={setListItem} />
		</>
	);
}
