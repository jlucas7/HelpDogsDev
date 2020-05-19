import React, { useState, useEffect } from 'react'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const ong_id = route.params.ong_id;

  
  function navigateToDetail(incident) { 
    navigation.navigate('Detail', { incident }); 
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

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);
 
  return (
    <View style={styles.container}>

      <Text style={styles.description}>Escolha um dos casos abaixo e colabore conosco.</Text>
      <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <TouchableOpacity
            onPress={() => navigateToDetail(incident)}
          >
          <View style={styles.incident}>
           <Text style={[styles.incidentProperty, { marginTop: 0 }]}>TITULO:</Text>
           <Text style={styles.incidentValue}>{incident.title}</Text>

           <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
           <Text style={styles.incidentValue}>{incident.description}</Text>

           <Text style={styles.incidentProperty}>VALOR:</Text>
           <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency', 
                currency: 'BRL' 
              }).format(incident.value)}
            </Text>

          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
