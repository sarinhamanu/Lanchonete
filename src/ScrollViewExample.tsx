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
   {id: "1", nome:"ℂ𝕠𝕔𝕒-𝕔𝕠𝕝𝕒 ", descricao: "Para se refrescar", preco: "12", image: require('./assets/images/cocacola.png')},
   {id: "2", nome:"𝔽𝕦𝕟𝕒𝕕𝕒 ", descricao: "Para se refrescar", preco: "10",  image:require('./assets/images/Funada.png')},
   {id: "3", nome:"𝔽𝕦𝕟𝕒𝕕𝕒 𝕃𝕚𝕞𝕒̃𝕠", descricao: "Para se refrescar", preco:"10",  image:require('./assets/images/funadalimao.png')},
   {id: "4", nome:"𝕊𝕦𝕔𝕠 𝕕𝕖 𝕝𝕒𝕣𝕒𝕟𝕛𝕒", descricao: "Para se refrescar", preco:"15", image:require('./assets/images/sucodelaranja.png')},
   {id: "5", nome:"𝕊𝕦𝕔𝕠 𝕕𝕖 𝕒𝕓𝕒𝕔𝕒𝕩𝕚 ", descricao:"Para se refrescar", preco:"15", image:require('./assets/images/abacaxi.png')},
   {id: "6", nome:"𝕊𝕦𝕔𝕠 𝕕𝕖 𝕞𝕒𝕣𝕒𝕔𝕦́𝕛𝕒 ", descricao: "Para se refrescar", preco:"15",  image:require('./assets/images/maracuja.png')},
   {id: "7", nome:"𝔸̀𝕘𝕦𝕒 𝕔𝕠𝕞 𝕘𝕒́𝕤", descricao: "Para se refrescar", preco:"4",  image:require('./assets/images/aguagás.png')},
   {id: "8", nome:"𝔸̀𝕘𝕦𝕒 𝕊𝕖𝕞 𝔾á𝕤", descricao: "Para se refrescar", preco:"3", image:require('./assets/images/agua.png')},


];

const renderItem = ({item}: {item:MeuItem})=>(
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTexto1}>{item.nome}</Text>
        <Text style={styles.itemTexto} >{item.descricao}</Text>
        <Text style={styles.itemTexto2}>R${item.preco},00</Text>
       <Image source={item.image} style={styles.image}/>
    </TouchableOpacity>
);

function DrinksExample(): React.JSX.Element{
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content'/>
            <View style={styles.header}>
              
            <TouchableOpacity>
                <Image
                  source={require('./assets/images/bebidas.png')}
                  style={styles.footerIcone}/>
            </TouchableOpacity>
               <Text style={styles.headerText}>𝖉𝖗𝖎𝖓𝖐𝖘</Text>
               
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
   },
   itemTexto2:{
    color:'white',
    alignSelf:'center',
    fontSize:30,
   }
});

export default DrinksExample;