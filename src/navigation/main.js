import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main, Messages } from "../screens";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Main">
			<Stack.Screen name="Main" component={Main} />
			<Stack.Screen name="Messages" component={Messages} />
		</Stack.Navigator>
	);
};
export default MainNavigator;
