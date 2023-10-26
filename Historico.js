import { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput } from "react-native";
import { UtilsContext } from "./Context";

export default function Historico(props) {

  const [senha, setSenha] = useState("");
  const { utils, setUtils } = useContext(UtilsContext)

  return (
    <View style={styles.container}>
      <View style={styles.flexDeTudo}>
        <Text style={styles.HistoricoTitulo}>
          Historico
        </Text>
        <View style={styles.card}>
          <Text style={styles.textos}>{utils.number}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9A9A9",
    alignItems: "center"
  },
  flexDeTudo: {
    flex: 1,
    alignItems: "flex-start"
  },
  HistoricoTitulo: {
    fontSize: "80px",
    marginBottom: "20px",
    marginTop: "50px"
  },
  card: {
    width: '500px',
    maxHeight: '60px',
    borderRadius: '3%',
    borderWidth: '2px',
    borderColor: 'black',
    flex: 1,
    alignItems: "flex-start"

  },
  textos: {
    fontSize: '30px',
    margin: '10px',
    fontWeight: 'bold'
  }

});