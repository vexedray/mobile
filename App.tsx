import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const formatarData = () => {
 const data = new Date();
 const dia = String(data.getDate()).padStart(2, '0');
 const mes = String(data.getMonth() + 1).padStart(2, '0');
 const ano = data.getFullYear();
 return `${dia}/${mes}/${ano}`;
  }
 return (
 <View style={styles.container}>
 <Text style={styles.titulo}>Bem vindo Rayssa</Text>
 <Text style={{color:'#000000ff', fontSize: 18}}>Hoje é dia {formatarData()}</Text>
 <Image
 source={{uri:'https://images.sympla.com.br/6463d57a2d1bb.png'}}
 style={{width:300, height:400}}
 resizeMode="contain"
 />
 </View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

titulo:{
  fontSize: 20,
  fontWeight: 'bold'
}
  
});
