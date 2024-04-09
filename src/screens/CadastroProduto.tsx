import axios from "axios";
import React, { useState }  from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera } from "react-native-image-picker";

const CadastroProduto: React.FC = () =>{
    const[produtos, setProdutos]= useState<Produto[]>([]);
    const[nome, setNome]= useState<string>('');
    const[preco,SetPreco]= useState<string>('');
    const[ingredientes, setIngredientes]= useState<string>('');
    const[imagem,setImagem]= useState<any>('');

    const cadastrarProduto = async ()=>{
        try{
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('preco', preco);
            formData.append('ingredientes', ingredientes);
            formData.append ('imagem',{
                uri:imagem,
                type:'image/jpeg',
                name: new Date() + '.jpg'
            });
            console.log(formData);
            const response = await axios.post ('http://10.137.11.233:8000/api/cadastrarProduto', formData, {
                headers : {
                    'Content-Type ': 'multipart/form-data'
                }
            });
            console.log(response);

        }

        catch (error){
            console.log(error)
        }

    }

    const abrirCamera =()=>{
        const options ={
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidht:2000
        };

        launchCamera(options, response =>{
            if(response.didCancel){
                console.log('cancelado pelo usuario');

            }else if(response.error){
                console.log('erro ao abrir a camera');
            }else{
                let imageUri = response.uri ||response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        })
    }

    return(

        <View style ={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content"/>
        <View style={styles.header}>
        <Image
                  source={require('../assets/images/casa.png')}
                  style={styles.footerIcone}/>
            <Text style={styles.headerText}>𝖈𝖆𝖋𝖊𝖙𝖊𝖗𝖎𝖆 𝖇𝖊𝖆𝖈𝖍</Text>
            
            

            </View>

            <View style ={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content"/>
        <View style={styles.header}>
        
            <Text style={styles.headerText1}>𓂀 ℂ𝕒𝕕𝕒𝕤𝕥𝕣𝕠 𝕕𝕖 ℙ𝕣𝕠𝕕𝕦𝕥𝕠 𓂀</Text>
            
            

            </View>
            <ScrollView>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="ミ★ 𝘕𝘰𝘮𝘦 𝘥𝘰𝘗𝘳𝘰𝘥𝘶𝘵𝘰 ★彡"
                value={nome}
                onChangeText={setNome} />
              
                <TextInput style={styles.input} placeholder="ミ★ 𝘱𝘳𝘦𝘤𝘰 ★彡"
                value={preco}
                onChangeText={SetPreco}/>
              
                <TextInput style={styles.input} placeholder="ミ★ 𝘐𝘯𝘨𝘳𝘦𝘥𝘪𝘦𝘯𝘵𝘦𝘴 ★彡"
                value={ingredientes}
                onChangeText={setIngredientes} multiline/>
             <View style={styles.alinhamentoimagemSelecionada}>
                {imagem ? <Image source ={{uri: imagem}}style={styles.imagemSelecionada}/>:null}
             </View>
             <TouchableOpacity style={styles.imageButton}>
                <Text style={styles.imageButtonText}>𝕊𝕖𝕝𝕖𝕔𝕚𝕠𝕟𝕒𝕣 𝕀𝕞𝕒𝕘𝕖𝕞</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                <Text style={styles.imageButtonText}>𝕋𝕚𝕣𝕒𝕣 𝔽𝕠𝕥𝕠</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ℂ𝕒𝕕𝕒𝕤𝕥𝕣𝕒𝕣 ℂ𝕝𝕚𝕖𝕟𝕥𝕖</Text>
             </TouchableOpacity>
            </View>
            </ScrollView>

            <View style={styles.footer}>
            <TouchableOpacity>
                <Image
                  source={require('../assets/images/anotar.png')}
                  style={styles.footerIcone}/>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image source={require('../assets/images/watts.png')}
                  style={styles.footerIcone}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../assets/images/carrinho.png')}
                  style={styles.footerIcone}/>
            </TouchableOpacity> 
           </View>
        </View>
        </View>
        
    );
}
const styles =StyleSheet.create({

    container:{
        flex: 1
    },
    header:{
        backgroundColor: 'pink',
        paddingVertical: 20,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 40,
        fontWeight: '100',
        color:'white'
    },
    form:{
    padding:10,
    backgroundColor:'#f0f0f0',
    marginBottom:10
    },
    input:{
        height:50,
        borderColor:'#121212',
        borderWidth:3,
        marginBottom:10,
        paddingHorizontal:10,
        borderRadius:10
    },
    imageButton:{
    backgroundColor:'pink',
    padding:10,
    borderRadius:30,
    alignItems:'center',
    marginBottom:10,
    fontWeight:'bold',
    },
    imageButtonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    imagemSelecionada:{
        width:200,
        height:200,
        resizeMode:'cover',
        borderRadius:5,
        marginBottom:10,

    },
    alinhamentoimagemSelecionada:{
        alignItems:'center',
    },
    button:{
        backgroundColor:'pink',
        padding:10,
        borderRadius:30,
        alignItems:'center',
        marginBottom:10
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
       
    },
    footer:{
        borderTopWidth: 0.2,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop:'auto'
      },
      footerIcone:{
        width: 70,
        height:70,
     borderRadius:30,
     },
     headerText1: {
        fontSize: 25,
        fontWeight: '100',
        color:'white'
    },
    
})

export default cadastrarProduto;