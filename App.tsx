import React  from 'react';
import { FlatList, ScrollView } from 'react-native';
import ScrollViewExample from './src/ScrollViewExample';
import LanchoneteExample from './src/Cardapio';
import  DoceListExample from './src/DoceExample';
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroCliente from './src/screens/CadastroCliente';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App(): React.ReactElement{

return(
     <NavigationContainer>
         <Stack.Screen name='LanchoneteExample' component={LanchoneteExample}
         options={{headerShown: false}}/>
          <Stack.Screen name='CadastroProduto' component={CadastroProduto}
         options={{headerShown: false}}/>
          <Stack.Screen name='CadastroCliente' component={CadastroCliente}
         options={{headerShown: false}}/>
        
     </NavigationContainer>

);

}

export default App;