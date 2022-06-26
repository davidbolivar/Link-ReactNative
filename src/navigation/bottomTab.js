import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "./main";
import MessagesNavigator from "./messages";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants/themes";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<BottomTabs.Navigator
			initialRouteName="MainTab"
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.textDark,
				tabBarInactiveTintColor: Colors.textSecondary,
			}}
		>
			<BottomTabs.Screen
				name="MainTab"
				component={MainNavigator}
				options={{
					tabBarLabel: "Inicio",
					tabBarIcon: ({ focused }) => <Ionicons name={focused ? "ios-home" : "ios-home-outline"} size={25} color={focused ? Colors.dark : Colors.secondary} />,
				}}
			/>
			<BottomTabs.Screen
				name="MessagesTab"
				component={MessagesNavigator}
				options={{
					tabBarLabel: "Mensajes",
					tabBarIcon: ({ focused }) => <Ionicons name={focused ? "ios-list" : "ios-list-outline"} size={25} color={focused ? Colors.dark : Colors.secondary} />,
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default TabNavigator;
