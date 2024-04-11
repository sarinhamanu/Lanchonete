import React, { useEffect, useState } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import {  Produto } from "./interface/ProdutoInterface";



const renderItem = ({ item }: { item: Produto }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.itemTexto1}>{item.nome}</Text>
    <Text style={styles.itemTexto} >{item.ingredientes}</Text>
    <Text style={styles.itemTexto2}>R${item.preco},00</Text>
    <Image source={item.imagem} style={styles.image} />
  </TouchableOpacity>
);



function LanchoneteExample(): React.JSX.Element {


  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Produto[]>('http://10.137.11.219:8000/api/produtoIndex');
        console.log(response.data);
        setProdutos(response.data);


      } catch (error) {
        setError("Ocorreu um erro");
        console.log(error);

      }

    }

    fetchData();
  }, []);
 
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle='light-content' />
      <View style={styles.header}>

        <TouchableOpacity>
          <Image
            source={require('./assets/images/casa.png')}
            style={styles.footerIcone} />
        </TouchableOpacity>
        <Text style={styles.headerText}>𝖈𝖆𝖋𝖊𝖙𝖊𝖗𝖎𝖆 𝖇𝖊𝖆𝖈𝖍</Text>

      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(MeuItem) => MeuItem.id}
      />



      <View style={styles.footer}>
        <TouchableOpacity>
          <Image
            source={require('./assets/images/anotar.png')}
            style={styles.footerIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('./assets/images/watts.png')}
            style={styles.footerIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('./assets/images/carrinho.png')}
            style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  item: {
    backgroundColor: 'black',
    color: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 30
  },
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: 'row',

  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black'
  },
  footer: {
    borderTopWidth: 0.2,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10
  },
  footerIcon: {
    width: 50,
    height: 50,
    borderRadius: 30
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 30
  },
  itemTexto: {
    color: 'white',

    fontSize: 15,


  },
  footerIcone: {
    width: 70,
    height: 70,
    borderRadius: 30,




  },
  itemTexto1: {

    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
  },
  itemTexto2: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
  }

});

export default LanchoneteExample;