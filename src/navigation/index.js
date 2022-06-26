// import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./bottomTab";
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	);
};
export default AppNavigator;
