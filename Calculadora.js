import React, { useState , useContext } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { UtilsContext } from "./Context";

export default function Calculadora(props) {

  const { utils, setUtils } = useContext(UtilsContext)

  const [number, setNumber] = useState('');

  const handleButtonPress = (value) => {
    setNumber(number + value);
  };

  const handleClearPress = () => {
    setNumber('');
  };

  const calcular = () => {
    if(number != ""){
      setNumber(eval(number));
        if(!utils.numbers){
             setUtils({...utils, numbers:[number + " = " + eval(number)]});
        }else{
            setUtils({...utils, numbers: [...utils.numbers,number + " = " + eval(number)]});
        }
      
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.textInput}
      onChangeText={setNumber}
      value={number}
      ></TextInput>

      <View style={styles.viewAlinhaRowOperadores}>
        <TouchableOpacity style={styles.touch} 
        onPress={() => handleButtonPress("+")}
        >
          <Text style={styles.textOperadores}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("-")}>
          <Text style={styles.textOperadores}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("/")}>
          <Text style={styles.textOperadores}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("*")}>
          <Text style={styles.textOperadores}>x</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}
        onPress={() => calcular()}>
          <Text style={styles.textOperadores}>=</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewAlinhaRow}>
        <TouchableOpacity style={styles.touch} 
        onPress={() => handleButtonPress("1")}>
          <Text style={styles.textOperadores}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("2")}>
          <Text style={styles.textOperadores}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("3")}>
          <Text style={styles.textOperadores}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewAlinhaRow}>
        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("4")}>
          <Text style={styles.textOperadores}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("5")}>
          <Text style={styles.textOperadores}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("6")}>
          <Text style={styles.textOperadores}>6</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewAlinhaRow}>
        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("7")}>
          <Text style={styles.textOperadores}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("8")}>
          <Text style={styles.textOperadores}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("9")}>
          <Text style={styles.textOperadores}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewAlinhaRow}>
        <TouchableOpacity style={styles.touch}
        onPress={() => handleButtonPress("0")}>
          <Text style={styles.textOperadores}>0</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewAlinhaRow}>
        <TouchableOpacity style={styles.touchFinal}
        onPress={handleClearPress}>
          <Text style={styles.textOperadores}>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.touchFinal}
            onPress={() => props.navigation.navigate("Historico")}>
          <Text style={styles.textOperadores}>Histórico</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#B7B5B4'
  },
  textInput: {
    borderWidth: '2px',
    width: '500px',
    fontSize: '60px',
    margin: '50px',
    borderRadius: '4%'
  },
  viewAlinhaRowOperadores: {
    display:"flex",
    flexDirection: "row",
    marginBottom: "50px"
  },
  viewAlinhaRow: {
    display:"flex",
    flexDirection: "row",
    marginBottom: "20px"
  },

  textOperadores: {
    fontSize: '30px'
  },
  touch: {
    backgroundColor: 'white',
    width: '40px',
    maxHeight: '50px',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20px',
    borderRadius: '10%'
  },
  touchFinal: {
    backgroundColor: 'white',
    width: '160px',
    maxHeight: '50px',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20px',
    borderRadius: '5%'
  }
});
