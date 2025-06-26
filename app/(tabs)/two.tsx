import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function LoginScreen({ onLogin }: { onLogin?: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Logo phía trên khu vực input */}
      <View style={styles.appLogo}>
        <Text style={styles.appLogoText}>A</Text>
      </View>
      <Text style={styles.title}>Đăng nhập Facebook</Text>
      <TextInput
        style={styles.input}
        placeholder="Email hoặc số điện thoại"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#888"
      />
      <Pressable style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </Pressable>
      <Text style={styles.forgot}>Quên mật khẩu?</Text>
      <View style={styles.separator} />
      <Pressable style={styles.createBtn}>
        <Text style={styles.createBtnText}>Tạo tài khoản mới</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  appLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#1877f2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  appLogoText: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1877f2",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    maxWidth: 350,
    height: 44,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#f5f6fa",
    fontSize: 16,
  },
  button: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#1877f2",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgot: {
    color: "#1877f2",
    marginTop: 16,
    marginBottom: 16,
    fontSize: 15,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
    marginVertical: 16,
  },
  createBtn: {
    backgroundColor: "#42b72a",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
  },
  createBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
