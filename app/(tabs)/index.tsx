import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import React, { useState } from "react";
import { Alert, Pressable } from "react-native";
import { checkConnection } from "@/service/login";
import styles from "@/style/style";

export default function TabOneScreen() {
  const [count, setCount] = useState(0);
  const handlePress = () => {
    setCount(count + 1);
    Alert.alert("Bạn đã nhấn nút!", `Số lần: ${count + 1}`);
  };

  const handleTestConnectionPress = async () => {
    console.log("[START] test connection");
    const connectionStatus = await checkConnection();
    if (connectionStatus) {
      Alert.alert(
        "Kết nối thành công!",
        "✅ Bạn đã kết nối tới Firebase Realtime Database."
      );
    } else {
      Alert.alert(
        "Kết nối thất bại!",
        "❌ Không thể kết nối tới Firebase Realtime Database."
      );
    }
    console.log("[END] test connection");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.title}>Bạn đã nhấn nút {count} lần</Text>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Nhấn tôi!</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: "#841584" }]}
        onPress={handleTestConnectionPress}
      >
        <Text style={styles.buttonText}>Test Connection</Text>
      </Pressable>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255, 255, 255, 0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
