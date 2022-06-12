import React, { useState } from "react";
import ListContainer from "../../components/List/Container";
import ChangeScreenButton from "../../components/ChangeScreenButton";

export default function MessagesScreen({ listItem, setListItem, goTo, setGoTo }) {
	return (
		<>
			<ListContainer listItem={listItem} setListItem={setListItem} />
			<ChangeScreenButton screen={"MainScreen"} setGoTo={setGoTo} goTo={goTo} />
		</>
	);
}
