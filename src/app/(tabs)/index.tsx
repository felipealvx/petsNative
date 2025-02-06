import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CardPet from "../components/Card";
import Search from "../components/Search";
import colors from "@/src/constants/colors";

export default function Home(){
  return (
    <SafeAreaView style={{flex: 1}}>
      <Search text="Pesquisar Pet"/>
      <CardPet />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  textBottom: {
    textAlign: 'center',
    margin: 20,
    color: colors.sageGrey,
  }
})