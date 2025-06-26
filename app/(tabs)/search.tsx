import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
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
      <Text style={styles.title}>Tìm kiếm A</Text>
      <Text style={styles.label}>User ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Mã người dùng"
        value={strSearchId}
        onChangeText={setSearchId}
        keyboardType="default"
        autoCapitalize="none"
      />
      <Pressable
        style={[styleCommon.button, { width: 100, alignSelf: "center" }]}
        onPress={handleSearch}
      >
        <Text style={styleCommon.buttonText}>Tìm</Text>
      </Pressable>
      <Text style={styles.label}>Kết quả:</Text>
      <Text
        style={[
          styles.label,
          { borderWidth: 1, borderColor: "#888", padding: 6, borderRadius: 4 },
        ]}
      >
        {JSON.stringify(userObj, null, 2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    margin: 10,
  },
});
