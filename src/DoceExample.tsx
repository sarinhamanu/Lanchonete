import React from "react";
import { FlatList, Image, StatusBar, StyleSheet,Text , TouchableOpacity, View } from "react-native";

interface MeuItem {
    id: string;
    nome: string;
    descricao: string;
    preco:string;
    image:any;
    
}
const dados: MeuItem[]= [
   {id: "1", nome:"ℂ𝕙𝕦𝕣𝕣𝕠𝕤 ", descricao: "doce de leite , brigadeiros e granulado", preco: "15", image: require('./assets/images/churros.png')},
   {id: "2", nome:"𝕊𝕠𝕣𝕧𝕖𝕥𝕖 ", descricao: "Morango, chocolate, uva,Limâ e flocos etc..", preco: "14",  image:require('./assets/images/sorvete.png')},
   {id: "3", nome:"𝔹𝕠𝕝𝕠", descricao: "Chocolate,Cenoura e de aniversario", preco:"20",  image:require('./assets/images/bolo.png')},
   {id: "4", nome:"𝕡𝕖𝕥𝕚𝕥 𝕘𝕒𝕥𝕖𝕒𝕦𝕒", descricao: "quer sentir um pouco do paraiso esperimente nosso petit gateaua", preco:"34", image:require('./assets/images/petitgateau.png')},
   {id: "5", nome:"ℂ𝕙𝕠𝕔𝕠𝕝𝕒𝕥𝕖𝕤 ", descricao:"variedades de chocolate", preco:"15", image:require('./assets/images/chocolate.png')},
   {id: "6", nome:"ℙ𝕦𝕕𝕚𝕞", descricao: "o nosso famoso pudim delicioso", preco:"15",  image:require('./assets/images/Pudim.png')},
   {id: "7", nome:"ℙ𝕒𝕧𝕖̂ ", descricao: "sua oportunidade de esperimentar nosso pavê", preco:"12",  image:require('./assets/images/pavê.png')},
   {id: "8", nome:"𝕋𝕠𝕣𝕥𝕒 𝕕𝕖 𝕃𝕚𝕞𝕒̃𝕠", descricao: "sua oportunidade de esperimentar nosso Torta de limão", preco:"10", image:require('./assets/images/Tortadelimão.png')},


];

const renderItem = ({item}: {item:MeuItem})=>(
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTexto1}>{item.nome}</Text>
        <Text style={styles.itemTexto} >{item.descricao}</Text>
        <Text style={styles.itemTexto}>R${item.preco},00</Text>
       <Image source={item.image} style={styles.image}/>
    </TouchableOpacity>
);

function DoceExample(): React.JSX.Element{
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content'/>
            <View style={styles.header}>
              
            <TouchableOpacity>
                <Image
                  source={require('./assets/images/bebidas.png')}
                  style={styles.footerIcone}/>
            </TouchableOpacity>
               <Text style={styles.headerText}>𝕾𝖜𝖊𝖊𝖙𝖘 𝖒𝖊𝖓𝖚</Text>
               
            </View>
           <FlatList  
           showsVerticalScrollIndicator={false}
           data={dados}
           renderItem={renderItem}
           keyExtractor={(MeuItem) => MeuItem.id}
           />
          


 <View style={styles.footer}>
            <TouchableOpacity>
                <Image
                  source={require('./assets/images/anotar.png')}
                  style={styles.footerIcon}/>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image source={require('./assets/images/watts.png')}
                  style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('./assets/images/carrinho.png')}
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
     backgroundColor: 'black',
     color:'white',
     padding:20,
     marginVertical: 8,
     marginHorizontal: 16,
     borderRadius:30
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
  color: 'black',
  alignSelf:'center'
   },
   footer:{
     borderTopWidth: 0.2,
     backgroundColor: 'black',
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center',
     paddingVertical: 10
   },
   footerIcon:{
    width: 50,
    height:50,
 borderRadius:30
   },
   image:{
     height:200,
     width:200,
     borderRadius:30
   },
   itemTexto:{
    color:'white',
   
    fontSize:15,
    

   },
   footerIcone:{
    width: 60,
    height:60,
 borderRadius:40,


 
 
   },
   itemTexto1:{
    
      color:'white',
      alignSelf:'center',
      fontSize:30,
   }

});

export default DoceExample;