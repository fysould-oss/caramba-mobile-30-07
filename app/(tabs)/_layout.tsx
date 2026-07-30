import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="primeiro"
        options={{
          title: "primeiro",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="looks-one" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="segundo"
        options={{
          title: "segundo",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="looks-two" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="terceiro"
        options={{
          title: "terceiro",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="looks-3" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
