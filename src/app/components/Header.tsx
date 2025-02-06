import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";
import colors from "@/src/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Link } from "expo-router";

type searchProps = {
  text: string;
}

export default function Header({text}: searchProps) {

  const [openModal, setOpenModal] = useState<Boolean>(false);



  return (
    <View style={styles.container}>
      <TextInput 
      placeholder={text}
      style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{color: colors.primary}}>Pesquisar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="add-circle" size={50} color={colors.primary} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    gap: 20,
    marginTop: 20,
  },
  input: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 13,
    flex: 1,
    color: colors.sageGrey,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
  }
})