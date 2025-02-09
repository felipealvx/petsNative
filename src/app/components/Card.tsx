import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import pets from "@/src/data/pets";
import colors from "@/src/constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";

export default function CardPet() {
  const renderItem = ({ item }: any) => (
    <ScrollView>
      <View style={styles.card}>
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
              <View style={styles.headerCard}>
                <View style={styles.nameAndSex}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: colors.primary,
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}{" "}
                  </Text>
                  <View>
                    {item.sex == "male" ? (
                      <Foundation name="male-symbol" size={28} color="blue" />
                    ) : (
                      <Foundation name="female-symbol" size={28} color="pink" />
                    )}
                  </View>
                </View>
                <Text style={{ fontWeight: "bold" }}>
                  {item.age} {item.age == 1 ? "ano" : "anos"}
                </Text>
              </View>

              <View style={styles.infoText}>
                <View style={styles.vacina}>
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    Última Vacina
                  </Text>
                  <Text style={{ fontSize: 16 }}>{item.vacina}</Text>
                </View>
                <View style={{borderBottomWidth: 0.5}}/>
                <View style={styles.vacina}>
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    Próx. Vacina
                  </Text>
                  <Text style={{ fontSize: 16 }}>{item.proxVacina}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: colors.offWhite }}>Ver informações</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  return (
    <FlatList
      data={pets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={<Text style={styles.textBottom}>Fim dos Pets!</Text>}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  image: {
    borderRadius: 130 / 2,
    width: 100,
    height: 100,
    borderWidth: 0.5,
    borderColor: colors.sageGrey,
  },
  infoContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameAndSex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  viewText: {
    gap: 5,
  },
  infoText: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 5,
    borderRadius: 4,
    gap: 15,
  },
  vacina: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 5,
  },
  textBottom: {
    textAlign: "center",
    margin: 20,
    color: colors.sageGrey,
  },
});
