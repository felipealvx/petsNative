import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";
import colors from "@/src/constants/colors";

type searchProps = {
  text: string;
}

export default function Search({text}: searchProps) {
  return (
    <View style={styles.container}>
      <TextInput 
      placeholder={text}
      style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{color: colors.primary}}>Pesquisar</Text>
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
    backgroundColor: "#e1e1e1",
    padding: 15,
    borderRadius: 13,
    flex: 1,
    color: colors.sageGrey
  },
  button: {
    paddingVertical: 20,
  }
})