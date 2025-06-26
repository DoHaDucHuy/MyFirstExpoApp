import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { findUserById } from "@/service/login";
import { User } from "@/types/User";
import styleCommon from "@/style/style";

export default function TabTwoScreen() {
  const [strSearchId, setSearchId] = useState("");
  const [userObj, setUserInfo] = useState<User | null>(null);

  const handleSearch = async () => {
    console.log("[START] search");
    const result = await findUserById(strSearchId);
    console.log(result);
    setUserInfo(result);
    console.log("[END] search");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tìm kiếm người dùng</Text>
      <View style={styles.inputWrapper}>
        <MaterialIcons
          name="search"
          size={24}
          color="#90caf9"
          style={{ marginRight: 8 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập mã người dùng"
          value={strSearchId}
          onChangeText={setSearchId}
          placeholderTextColor="#90caf9"
        />
      </View>
      <Pressable
        style={[styleCommon.button, { width: 100, alignSelf: "center" }]}
        onPress={handleSearch}
      >
        <Text style={styleCommon.buttonText}>Tìm kiếm</Text>
      </Pressable>
      <Text style={styles.label}>Kết quả:</Text>
      <View
        style={[
          styles.card,
          { borderWidth: 1, borderColor: "#888", padding: 6, borderRadius: 4 },
        ]}
      >
        <Text style={styles.cardTitle}>Kết quả</Text>
        <Text style={styles.cardText}>
          {userObj ? `ID: ${userObj.FullName}` : "Không tìm thấy người dùng"}
        </Text>
        <Text style={styles.cardText}>
          {userObj ? `Tên: ${userObj.Gender}` : ""}
        </Text>
        <Text style={styles.cardText}>
          {userObj ? `Email: ${userObj.Username}` : ""}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 32,
    marginTop: 40,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 4,
    elevation: 2,
    shadowColor: "#1976d2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    width: "100%",
    maxWidth: 350,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: "#1976d2",
  },
  label: {
    fontSize: 16,
    margin: 10,
  },
  button: {
    backgroundColor: "#1976d2",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
    marginBottom: 24,
    elevation: 2,
    shadowColor: "#1976d2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    maxWidth: 350,
    elevation: 3,
    shadowColor: "#1976d2",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    marginTop: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
});
