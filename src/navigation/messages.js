import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Messages } from "../screens";
import { Colors } from "../constants/themes";
import { isAndroid } from "../constants/utils";

const Stack = createNativeStackNavigator();

const MessagesNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Messages"
			screenOptions={{
				headerStyle: {
					backgroundColor: isAndroid ? Colors.primary : Colors.secondary,
				},
				headerTintColor: isAndroid ? Colors.white : Colors.black,
			}}
		>
			<Stack.Screen name="Messages" component={Messages} />
		</Stack.Navigator>
	);
};
export default MessagesNavigator;
