import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { UtilsContext } from './Context.js';
import Calculadora from './Calculadora';
import Historico from './Historico';
import { useState } from 'react';

export default function App() {
  const [utils, setUtils] = useState({})
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
        <Stack.Navigator>
          <Stack.Screen name="Calculadora" component={Calculadora} />
          <Stack.Screen name="Historico" component={Historico} />
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}