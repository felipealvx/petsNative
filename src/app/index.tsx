import { SafeAreaView, StatusBar, Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Link } from "expo-router";

export default function InitialScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor={colors.offWhite} />
      <View style={styles.container}>
        <View style={styles.viewTitlePrimary}>
          <Text style={styles.titlePrimary}>
            Vamos adicionar o seu primeiro <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Pet</Text>
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={require("../assets/images/ilustration.png")}/>
        </View>
        <View style={styles.buttonContent}>
          <Text style={{textAlign: 'center'}}>Ao continuar você fará o cadastro do seu primeiro pet.</Text>
          <TouchableOpacity style={styles.buttonContinue}>
            <Link push href={'/(tabs)'} style={styles.link}>
              <Text style={styles.continueText}>Continuar</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
    justifyContent: 'center',
    gap: 20,
  },
  viewTitlePrimary:{
    width: '100%',
  },
  titlePrimary: {
    fontSize: 40,
    color: colors.charcoal,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imgContainer: {
    width: '100%',
  },
  buttonContent: {
    width: '100%',
    gap: 12,
  },
  buttonContinue: {
    backgroundColor: colors.primary,
    height: 60,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    backgroundColor: colors.primary,
    flex: 1,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  continueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.offWhite,
    textAlign: 'center',
  }
})