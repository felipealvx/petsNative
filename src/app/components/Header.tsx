import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from "react-native";
import colors from "@/src/constants/colors";
import Modals from "./Modal";

type searchProps = {
  text: string;
};

export default function Header({ text }: searchProps) {
  return (
    <View style={styles.container}>
      <TextInput placeholder={text} style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: colors.primary }}>Pesquisar</Text>
      </TouchableOpacity>
      <Modals />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    gap: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 13,
    flex: 1,
    color: colors.sageGrey,
  },
  button: {
    paddingVertical: 10,
  },
})