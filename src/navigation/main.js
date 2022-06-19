import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main, Messages } from "../screens";
import { Colors } from "../constants/themes";
import { isAndroid } from "../constants/utils";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Main"
			screenOptions={{
				headerStyle: {
					backgroundColor: isAndroid ? Colors.primary : Colors.secondary,
				},
				headerTintColor: isAndroid ? Colors.white : Colors.black,
			}}
		>
			<Stack.Screen name="Main" component={Main} />
			<Stack.Screen name="Messages" component={Messages} />
		</Stack.Navigator>
	);
};
export default MainNavigator;
