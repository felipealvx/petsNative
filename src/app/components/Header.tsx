import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import colors from "@/src/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import Modal from "react-native-modal";

type searchProps = {
  text: string;
};

let width = Dimensions.get('window').width;

export default function Header({ text }: searchProps) {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={styles.container}>
      <TextInput placeholder={text} style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: colors.primary }}>Pesquisar</Text>
      </TouchableOpacity>

      {/* ------------------modal-------------------- */}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={'down'}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.line}/>
            <View style={styles.headerModal}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="closecircle" size={24} color={colors.sageGrey} />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>Cadastre seu Pet</Text>


          </View>
        </View>
      </Modal>
      {/* ------------------modal-------------------- */}

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Ionicons name="add-circle" size={50} color={colors.primary} />
      </TouchableOpacity>
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
  // modal ------------------------
  modal: {
    margin: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: '#fff',
    height: '75%',
    borderRadius: 20,
    padding: 20,
    position: 'relative',
  },
  headerModal: {
    alignItems: 'flex-end',
  },
  line: {
    position: 'absolute',
    top: 10,
    left: width / 2.35,
    height: 5,
    width: 60,
    borderRadius: 5/2,
    backgroundColor: colors.sageGrey,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24
  },
});
