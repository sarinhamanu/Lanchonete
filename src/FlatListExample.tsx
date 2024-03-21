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
   {id: "1", nome:"ℍ𝕒𝕞𝕓𝕦𝕘𝕦𝕖𝕣 ", descricao: "Pão, Molho especial,carne, queijo,presunto, alface ,tomate, bacon", preco: "15", image: require('./assets/images/Hamburger.png')},
   {id: "2", nome:"𝔹𝕒𝕥𝕒𝕥𝕒 𝕣𝕖𝕔𝕙𝕖𝕒𝕕𝕒 ", descricao: "Calabresa, queijo, bacon , molho especial", preco: "25",  image:require('./assets/images/batata.png')},
   {id: "3", nome:"𝕩-𝕓𝕦𝕘𝕦𝕖𝕣", descricao: "molho especial,dois hambuguer artesanal, cebola , queijo e Presunto", preco:"15",  image:require('./assets/images/Hamburger.png')},
   {id: "4", nome:"ℍ𝕠𝕥 𝕕𝕠𝕘 ", descricao: "salsicha, milho, batata palha, mostarda,molho verde, salada e frango", preco:"10", image:require('./assets/images/hotdog.png')},
   {id: "5", nome:"𝔹𝕦𝕣𝕣𝕚𝕥𝕠𝕤 ", descricao: "carne moída, pimenta,creme azedo,molho típico mexicano com iogurte e cream cheese e limão.", preco:"35", image:require('./assets/images/burritos.png')},
   {id: "6", nome:"ℙ𝕒𝕤𝕥𝕖𝕝 ", descricao: "carne, frango, calabresa, pizza,queijo e doce", preco:"14",  image:require('./assets/images/pastel.png')},
   {id: "7", nome:"𝕩-𝕔𝕒𝕝𝕒𝕓𝕣𝕖𝕤𝕒", descricao: "Pão,calabresa, alface,cebola, creme especial e queijo na brasa", preco:"15",  image:require('./assets/images/Hamburger.png')},
   {id: "8", nome:"𝔹𝕒𝕝𝕕𝕖 𝕕𝕖 𝕗𝕣𝕒𝕟𝕘𝕠 ", descricao: "frango ao molho, frango crocante, frango com molho especial", preco:"40", image:require('./assets/images/baldedefrango.png')},
   {id: "9", nome:"𝕊𝕦𝕤𝕙𝕚 ", descricao: "hot holl, salmão,Temaki frito, Temaki cru, Guiosa e sunomoro", preco:"69", image:require('./assets/images/sushi.png')},
   {id: "10", nome:"𝕝𝕒𝕤𝕒𝕟𝕙𝕒 ", descricao: "queijo, presunto,molho branco,molho de tomate", preco:"25",  image:require('./assets/images/lasanha.png')},
   {id: "11", nome:"𝕡𝕒̃𝕠 𝕕𝕖 𝕢𝕦𝕖𝕚𝕛𝕠  ", descricao: "queijo, nutella, creme ninho e frango", preco: "5" ,  image:require('./assets/images/pãodequeijo.png')},
   {id: "12", nome:"𝕊𝕒𝕝𝕘𝕒𝕕𝕠𝕤 ", descricao: "Tomate,hambuguer , tomate e molho", preco:"9",  image:require('./assets/images/salgados.png')},
   {id: "13", nome:"𝔹𝕒𝕥𝕒𝕥𝕒̃𝕠 ", descricao: "nutella, mel e creme ninho", preco:"20" , image:require('./assets/images/creep.png')},
   {id: "14", nome:"ℙ𝕚𝕫𝕫𝕒𝕤 ", descricao: "Frango, quatro queijo, strogonoff de carne,strogonoff de frango e civeta", preco:"45", image:require('./assets/images/pizza.png')},

];

const renderItem = ({item}: {item:MeuItem})=>(
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTexto1}>{item.nome}</Text>
        <Text style={styles.itemTexto} >{item.descricao}</Text>
        <Text style={styles.itemTexto2}>R${item.preco},00</Text>
       <Image source={item.image} style={styles.image}/>
    </TouchableOpacity>
);

function LanchoneteExample(): React.JSX.Element{
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content'/>
            <View style={styles.header}>
              
            <TouchableOpacity>
                <Image
                  source={require('./assets/images/casa.png')}
                  style={styles.footerIcone}/>
            </TouchableOpacity>
               <Text style={styles.headerText}>𝖈𝖆𝖋𝖊𝖙𝖊𝖗𝖎𝖆 𝖇𝖊𝖆𝖈𝖍</Text>
               
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
  color: 'black'
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
    width: 70,
    height:70,
 borderRadius:30,


 
 
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

export default LanchoneteExample;