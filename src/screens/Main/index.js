import React, { useState } from "react";
import AddMessage from "../../components/AddMessage";
import ChangeScreenButton from "../../components/ChangeScreenButton";

export default function MainScreen({ listItem, setListItem, goTo, setGoTo }) {
	return (
		<>
			<AddMessage setListItem={setListItem} />
			{listItem.length > 0 && <ChangeScreenButton screen={"MessagesScreen"} setGoTo={setGoTo} goTo={goTo} />}
		</>
	);
}
