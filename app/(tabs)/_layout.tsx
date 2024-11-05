import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="detail"
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}