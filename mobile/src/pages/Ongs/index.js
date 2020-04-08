import React, { useState, useEffect } from 'react'; // use state e use efect controlam estado do componente
//import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';// utilizado para navegações com botões
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Ongs() {
  const [ongs, setOngs] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1); //aqui entra a parte de paginação
  const [loading, setLoading] = useState(false);// loading vai servir para que o usuario não fique requisitando toda hora
  //quando ele puxar pra baixo o loading recebe true e em quanto estiver true a função load incidents não sera chamada 

  const navigation = useNavigation();

  function navigateToIncident(ong_id) { // rotas
    navigation.navigate('Incidents', { ong_id }); // nome deve ser igual ao nome dado no arquivo rotas
  } //passa para o sistemas de rotas o incidente selecionado para ser aberto na tela de detalhes

  async function loadOngs() {
    if (loading) {
      return;
    }

    if (total > 0 && ongs.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('ongs', {
      params: { page }
    });

    setOngs([...ongs, ...response.data]);//sprad para manter os dados anteriores e carregar os novos na paginação
    setTotal(response.headers['x-total-count']);//aqui pega os dados do cabeçalho
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadOngs();
  }, []);
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <Text style={styles.title}>Colabore conosco!</Text>
      <Text style={styles.description}>Por um Mundo Onde o Bem-Estar Animal Importe e a Crueldade Contra os Animais Tenha Fim.</Text>

      <FlatList // torna possivel o sckroll
        data={ongs}
        style={styles.ongList}
        keyExtractor={ong => ong.id}
        // showsVerticalScrollIndicator={false}
        onEndReached={loadOngs}
        onEndReachedThreshold={0.2}
        renderItem={({ item: ong }) => (
            <TouchableOpacity // torna qualquer coisa clicavél e da uma opacidade no click
                onPress={() => navigateToIncident(ong.id)} // navegação para pagina de detalhes passando o incidente como parametro
            >
              <View style={styles.ong}>
                  <Image source={require("../../" + "assets/ong2" + ".png")} />
                  <View style={styles.ongInfo}>

                    <View style={styles.ongInfoText}>
                      <Text style={styles.ongProperty}>NOME:</Text>
                      <Text style={styles.ongValue}>{ong.name}</Text>

                      <Text style={styles.ongProperty}>E_MAIL:</Text>
                      <Text style={styles.ongValue}>{ong.email}</Text>
                    </View>

                    <View style={styles.ongInfoText}>  
                      <Text style={styles.ongProperty}>LOCAL:</Text>
                      <Text style={styles.ongValue}>{ong.city}/{ong.uf}</Text>   

                      <Text style={styles.ongProperty}>WHATSAPP:</Text>
                      <Text style={styles.ongValue}>{ong.whatsapp}</Text>   
                    </View>

                  </View>
              </View>
            </TouchableOpacity>
        )}
      />
    </View>
  );
}
