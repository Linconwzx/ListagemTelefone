import { View, Text, StyleSheet } from "react-native";

interface propsContato{
    nome: string,
    tel: string
}

export default function Contatos({nome, tel}:propsContato){
    return (
        <>
            <View style={styles.cartao}>
                <Text style={styles.nome}>
                    Nome: {nome}
                </Text>
                <Text style={styles.tel}>
                    Telefone: {tel}
                </Text>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartao: {
    backgroundColor: '#9072d1',
    padding: 8,
    marginVertical: 8,
    borderRadius: 15,
    width: '90%',
  },
  nome: {
    fontSize: 17,
    color: '#372040',


  },
  tel: {
    fontSize: 17,
    color: '#372040',
  }
});
