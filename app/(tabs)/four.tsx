import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const QUESTION = {
  question: "Đâu là thủ đô của Việt Nam?",
  options: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Huế"],
  answer: 0, // chỉ số đáp án đúng
};

export default function QuizScreen() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setShowResult(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Câu hỏi trắc nghiệm</Text>
      <Text style={styles.question}>{QUESTION.question}</Text>
      {QUESTION.options.map((opt, idx) => (
        <Pressable
          key={idx}
          style={[
            styles.option,
            selected === idx &&
              (idx === QUESTION.answer ? styles.correct : styles.incorrect),
          ]}
          onPress={() => handleSelect(idx)}
          disabled={showResult}
        >
          <Text style={styles.optionText}>{opt}</Text>
        </Pressable>
      ))}
      {showResult && (
        <Text
          style={
            selected === QUESTION.answer
              ? styles.resultCorrect
              : styles.resultIncorrect
          }
        >
          {selected === QUESTION.answer ? "Chính xác!" : "Sai rồi!"}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd", // xanh nhạt
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    color: "#1565c0",
    marginBottom: 24,
    textAlign: "center",
  },
  option: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#bbdefb",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "transparent",
  },
  optionText: {
    color: "#0d47a1",
    fontSize: 16,
    fontWeight: "bold",
  },
  correct: {
    borderColor: "#43a047",
    backgroundColor: "#c8e6c9",
  },
  incorrect: {
    borderColor: "#e53935",
    backgroundColor: "#ffcdd2",
  },
  resultCorrect: {
    color: "#388e3c",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  resultIncorrect: {
    color: "#d32f2f",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
});
