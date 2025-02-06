import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import CardPet from "../components/Card";
import Header from "../components/Header";
import colors from "@/src/constants/colors";

export default function Home(){
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <Header text="Pesquisar Pet" /> 
      <CardPet />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({

})