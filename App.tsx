import { StyleSheet, Text, View, FlatList} from 'react-native';
import Contatos from './componentes/Contatos';

const contatos = [
  {id: "1", nome: "Juliana", tel: "(13) 139947483"},
    {id: "2", nome: "de", tel: "(13) 139947483"},
      {id: "3", nome: "Oliveira", tel: "(13) 139947483"},
        {id: "4", nome: "Reis", tel: "(13) 139947483"},

          {id: "5", nome: "Lincon", tel: "(13) 139947483"},
            {id: "6", nome: "dos", tel: "(13) 139947483"},
              {id: "7", nome: "Santos", tel: "(13) 139947483"},
                {id: "8", nome: "Queiroz", tel: "(13) 139947483"},
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Contato</Text>
      <View style={styles.lista}>
      <FlatList 
        data={contatos}
        keyExtractor={item=>item.id}
        renderItem={({item}) => <Contatos tel={item.tel} nome={item.nome} />}
      />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a52cf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#3d1f48',
    fontSize: 23,
    width: 180,
    marginBottom: 40,
  },
  lista: {
    height: 600,
    width: '85%',
    marginLeft: '10%',
  },
});
