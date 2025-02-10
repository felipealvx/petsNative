import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import CardPet from "../components/Card";
import Header from "../components/Header";
import { useState } from "react";

export default function Home(){



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4'}}>
      <Header text="Pesquisar Pet..." /> 
      <CardPet />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
})