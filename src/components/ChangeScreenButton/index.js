import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";
import styles from "./styles.js";

export default function ChangeScreenButton({ screen, setGoTo }) {
	return <Button title={`Ir a ${screen}`} color="darkgray" onPress={() => setGoTo(screen)} />;
}
