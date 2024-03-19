import React from "react";
import { FlatList, Image, StatusBar, StyleSheet,Text , TouchableOpacity, View } from "react-native";

interface MeuItem {
    id: string;
    nome: string;
    descricao: string;
    preco:number;
    image:any;
    
}
const dados: MeuItem[]= [
   {id: "1", nome:"Hambuguer ", descricao: "Pão, Molho especial,carne, queijo,presunto, alface ,tomate, bacon", preco: 15.00, image:require('../assets/imagens/Hambuguer.png')},
   {id: "2", nome:"Batata recheada ", descricao: "Calabresa, queijo, bacon , molho especial", preco: 25.00,  image:require('../assets/imagens/batata frita.png')},
   {id: "3", nome:"x-buguer", descricao: "molho especial,dois hambuguer artesanal, cebola , queijo e Presunto", preco:15.00,  image:require('../assets/imagens/Hambuguer.png')},
   {id: "4", nome:"Hot dog ", descricao: "salsicha, milho, batata palha, mostarda,molho verde, salada e frango", preco:10.00, image:require('../assets/imagens/hot dog.png')},
   {id: "5", nome:"Burritos ", descricao: "carne moída, pimenta,creme azedo,molho típico mexicano com iogurte e cream cheese e limão.", preco:35.00, image:require('../assets/imagens/burrito.png')},
   {id: "6", nome:"Pastel ", descricao: "carne, frango, calabresa, pizza,queijo e doce", preco:14.99,  image:require('../assets/imagens/Hambuguer.png')},
   {id: "7", nome:"x-calabresa ", descricao: "Pão,calabresa, alface,cebola, creme especial e queijo na brasa", preco:15.89,  image:require('../assets/imagens/Hambuguer.png')},
   {id: "8", nome:"Balde de frango ", descricao: "frango ao molho, frango crocante, frango com molho especial", preco:40.00, image:require('../assets/imagens/Hambuguer.png')},
   {id: "9", nome:"Sushi ", descricao: "hot holl, salmão,Temaki frito, Temaki cru, Guiosa e sunomoro", preco:69.00, image:require('../assets/imagens/Hambuguer.png')},
   {id: "10", nome:"Açai ", descricao: "Amendoim, nutella, chocoboll,creme ninho, morango, banana, kiwi e ovomaltine", preco:15.00,  image:require('../assets/imagens/Hambuguer.png')},
   {id: "11", nome:"chippa  ", descricao: "chippa salgada, chippa com frango, chippa de nutella,chippa de carne, chipa de goiaba e creme ninho", preco: 5.00 ,  image:require('../assets/imagens/Hambuguer.png')},
   {id: "12", nome:"Salgados ", descricao: "Tomate,hambuguer , tomate e molho", preco:9.00,  image:require('../assets/imagens/Hambuguer.png')},
   {id: "13", nome:"Batatão ", descricao: "bata palha, calabresa, bacon, frango ,tomate, milho verde", preco:20.00 , image:require('../assets/imagens/Hambuguer.png')},
   {id: "14", nome:"Pizzas ", descricao: "Frango, quatro queijo, strogonoff de carne,strogonoff de frango e civeta", preco:45.00, image:require('../assets/imagens/Hambuguer.png')},
   {id: "15", nome:"Refrigerante  ", descricao: "Coca-Cola, Tubaina e fanta, ", preco:12.00, image:require('../assets/imagens/Hambuguer.png')},
   {id: "16", nome:" Sucos ", descricao: " suco de limão, suco de laranja, suco de hortelã e suco de abacaxi", preco:17.00, image:require('../assets/imagens/Hambuguer.png')},
   
];

const renderItem = ({item}: {item:MeuItem})=>(
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.idade}</Text>
        <Text>{item.email}</Text>
    </TouchableOpacity>
);

function FlatListExample(): React.JSX.Element{
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="green" barStyle='light-content'/>
            <View style={styles.header}>
               <Text style={styles.headerText}>Flat List</Text>
            </View>
           <FlatList  
           showsVerticalScrollIndicator={false}
           data={dados}
           renderItem={renderItem}
           keyExtractor={(item) => item.id}
           />
           <View style={styles.footer}>
            <TouchableOpacity>
                <Image
                  source={require('./assets/images/home.png')}
                  style={styles.footerIcon}/>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image source={require('./assets/images/orders.png')}
                  style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('./assets/images/profile.png')}
                  style={styles.footerIcon}/>
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
     backgroundColor: 'yellow',
     padding:20,
     marginVertical: 8,
     marginHorizontal: 16
   },
   header: {
     backgroundColor: 'green',
     alignItems: 'center',
     paddingVertical: 10
   },
   headerText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white'
   },
   footer:{
     borderTopWidth: 0.2,
     backgroundColor: 'white',
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center',
     paddingVertical: 10
   },
   footerIcon:{
    width: 30,
    height:30
   }

});

export default FlatListExample;