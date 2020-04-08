import React, { useState, useEffect } from 'react'; // use state e use efect controlam estado do componente
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';// utilizado para navegações com botões
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1); //aqui entra a parte de paginação
  const [loading, setLoading] = useState(false);// loading vai servir para que o usuario não fique requisitando toda hora
  //quando ele puxar pra baixo o loading recebe true e em quanto estiver true a função load incidents não sera chamada 

  const navigation = useNavigation();
  const route = useRoute();

  const ong_id = route.params.ong_id;

  
  function navigateToDetail(incident) { // rotas
    navigation.navigate('Detail', { incident }); // nome deve ser igual ao nome dado no arquivo rotas
  } //passa para o sistemas de rotas o incidente selecionado para ser aberto na tela de detalhes

  function navigateBack() {
    navigation.goBack()
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents/ong_id', {
      params: { page, ong_id}
    });

    setIncidents([...incidents, ...response.data]);//sprad para manter os dados anteriores e carregar os novos na paginação
    setTotal(response.headers['x-total-count']);//aqui pega os dados do cabeçalho
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#381564" />
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>Escolha um dos casos abaixo e colabore conosco.</Text>
      <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
      </Text>

      <FlatList // torna possivel o sckroll
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        // showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
           <Text style={[styles.incidentProperty, { marginTop: 0 }]}>TITULO:</Text>
           <Text style={styles.incidentValue}>{incident.title}</Text>

           <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
           <Text style={styles.incidentValue}>{incident.description}</Text>

           <Text style={styles.incidentProperty}>VALOR:</Text>
           <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {  //formato intl importado no arquivo app.js
                style: 'currency', 
                currency: 'BRL' 
              }).format(incident.value)}
            </Text>

            <TouchableOpacity // torna qualquer coisa clicavél e da uma opacidade no click
              style={styles.detailsButton} 
              onPress={() => navigateToDetail(incident)} // navegação para pagina de detalhes passando o incidente como parametro
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#381564"/>          
            </TouchableOpacity>
          </View>
        )}//color="#E02041" 
      />
    </View>
  );
}
