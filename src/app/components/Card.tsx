import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import pets from "@/src/data/pets";
import colors from "@/src/constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CardPet(){

  const renderItem = ({item}: any) => (
    <ScrollView>
        <View style={styles.container}>
          <View>
            <Image
              source={item.image} 
              resizeMode="cover"
              style={styles.image}
            />
          </View>
          <View style={styles.infoContent}>
            <View style={styles.viewText}>
              <Text style={{fontSize: 24, color: colors.primary, fontWeight: 'bold'}}>{item.name} </Text>
              
              <View style={styles.infoText}>
                <Text>Idade: {item.age} {item.age == 1 ? 'ano' : 'anos'} </Text>
                <FontAwesome name="calendar-o" size={20} color={colors.sageGrey} />
              </View>
              
              <View style={styles.infoText}>
                <Text>{item.favoriteFood}</Text>
                <MaterialIcons name="fastfood" size={20} color={colors.sageGrey} />
              </View>

              <View style={styles.infoText}>
                <Text>Vacinação: {item.vacina}</Text>
                <FontAwesome5 name="syringe" size={20} color={colors.sageGrey}/> 
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: colors.offWhite}}>Ver informações</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  )

  return (
    <FlatList
      data={pets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={<Text style={styles.textBottom}>Fim dos Pets!</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 13,
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    gap: 10,
    flex: 1,
  },
  image: {
    borderRadius: 7.5,
    width: 130,
    height: '100%'
  },
  infoContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  viewText: {
    gap: 5,
  },
  infoText: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: "#e1e1e1",
    padding: 2,
    borderRadius: 4,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 7.5,
    marginTop: 5
  },
  textBottom: {
    textAlign: 'center',
    margin: 20,
    color: colors.sageGrey,
  }
});