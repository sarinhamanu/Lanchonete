
import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet,Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const CadastroCliente: React.FC = () => {
    const[foto, setFoto] = useState<any>('');
    const[nome, setNome] = useState<string>('');
    const[telefone, setTelefone] = useState<string>('');
    const[endereco, setEndereco] = useState<string>('');
    const[email, setEmail] = useState<any>('');
    const[password, setPassword] = useState<any>('');
    
    const cadastroCliente = async () => {
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('telefone', telefone);
        formData.append('endereco', endereco);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('imagem',{
            uri: foto,
            type: 'image/jpeg',
            name: new Date () + '.jpg'
        });
        console.log(formData);
        const response = await axios.post('http://10.137.11.219:8000/api/cadastrarCliente', formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        });

        console.log(response);
    }

    catch(error){
        console.log(error);
    }
        

    }

    const abrirCamera =()=> {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight:2000,
            maxWidth: 2000
        };
        launchCamera(options, response =>{
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            }else if (response.error){
                console.log('erro ao abrir a camera');
            }else {
                let imageUri = response.uri|| response.assets?.[0]?.uri;
            setFoto(imageUri);
            console.log(imageUri);
                    }
        })
    }

    const selecionarImagem = ()=> {
        const options = {
            mediaType: 'photo',
            incluedeBase64: false,
            maxHeigth:2000,
            maxWidth:2000
        };

        launchImageLibrary(options, (response)=>{
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            }else if (response.error){
                console.log('erro ao abrir a galeria');
            }else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setFoto(imageUri)
            }

        })
    }

    return(
    
        <View style ={Styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={Styles.header}>
            <Image
                  source={require('../assets/images/casa.png')}
                  style={Styles.footerIcone}/>
                <Text style={Styles.headerText}>𝖈𝖆𝖋𝖊𝖙𝖊𝖗𝖎𝖆 𝖇𝖊𝖆𝖈𝖍</Text>
                
                

                </View>

                <View style ={Styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={Styles.header}>
          
                <Text style={Styles.headerText}>ℂ𝕒𝕕𝕒𝕤𝕥𝕣𝕠 𝕕𝕖 ℂ𝕝𝕚𝕖𝕟𝕥𝕖</Text>
                
                

                </View>

                
       <ScrollView >
               <View style={Styles.form}>
               <View style={Styles.alinhamentoImagemSelecionada}>
                    {foto ? <Image source={{ uri: foto}} style={Styles.imagemSelecionada}/>:null}
                </View>
                <TextInput style={Styles.input} placeholder="ミ★ 𝘕𝘰𝘮𝘦 ★彡" value={nome}
                onChangeText={setNome}/>
<TextInput style={Styles.input} placeholder=" ミ★ 𝙏𝙀𝙇𝙀𝙁𝙊𝙉𝙀 ★彡" value={telefone}
                onChangeText={setTelefone}/>
                   <TextInput style={Styles.input} placeholder="ミ★ 𝙀𝙉𝘿𝙀𝙍𝙀𝘾̧𝙊 ★彡" value={endereco}
                onChangeText={setEndereco} multiline/>
                 <TextInput style={Styles.input} placeholder="ミ★ 𝙀𝙈𝘼𝙄𝙇 ★彡" value={email}
                onChangeText={setEmail} multiline/>
                 <TextInput style={Styles.input} placeholder="ミ★ 𝙎𝙀𝙉𝙃𝘼 ★彡" value={password}
                onChangeText={setPassword} multiline/>
                <TouchableOpacity style={Styles.imageButton}>
                    <Text style={Styles.imageButtonText} onPress={selecionarImagem}>𝕊𝕖𝕝𝕖𝕔𝕚𝕠𝕟𝕒𝕣 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.imageButton}>
                    <Text style={Styles.imageButtonText} onPress={abrirCamera}>𝕋𝕚𝕣𝕒𝕣 𝔽𝕠𝕥𝕠</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.imageButton}>
                    <Text style={Styles.imageButtonText} onPress={cadastroCliente}>ℂ𝕒𝕕𝕒𝕤𝕥𝕣𝕒𝕣 ℂ𝕝𝕚𝕖𝕟𝕥𝕖</Text>
                </TouchableOpacity>
     
               </View>
               </ScrollView>
               <View style={Styles.footer}>
            <TouchableOpacity>
                <Image
                  source={require('../assets/images/anotar.png')}
                  style={Styles.footerIcone}/>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image source={require('../assets/images/watts.png')}
                  style={Styles.footerIcone}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../assets/images/carrinho.png')}
                  style={Styles.footerIcone}/>
            </TouchableOpacity> 
           </View>
         
        </View>
       
           </View>     
        

      
    );
}

const Styles = StyleSheet.create({

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
    
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height:50,
        borderColor: '#121212',
        borderWidth:3,
        marginBottom:10,
        paddingHorizontal:10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'pink',
        padding: 10,
        borderRadius:30,
        alignItems: 'center',
        marginBottom:10
    },
    imageButtonText: {
        color: 'white',
        fontSize: 30,
        fontWeight:'800',
        
    },
    imagemSelecionada: {
        width:200,
        height:200,
        resizeMode:'cover',
        borderRadius: 5,
        marginBottom:10,
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#E40066',
        padding: 10,
        borderRadius:5,
        alignItems:'center'
    },
    buttonText: {
        color:'white',
        fontWeight: 'bold',
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
     }
});

export default CadastroCliente;