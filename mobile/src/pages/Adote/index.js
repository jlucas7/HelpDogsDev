import React, { useState, useEffect } from 'react'; 
import { /* useNavigation, */ useRoute } from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Adote() {
    const [adocoes, setAdocoes] = useState([]);
    const [total, setTotal] = useState(0);

    const [page, setPage] = useState(1); 
    const [loading, setLoading] = useState(false);

    const route = useRoute();
  
    const ong_id = route.params.ong_id;
  
    
    async function loadAdocoes() {
      if (loading) {
        return;
      }

      if (total > 0 && adocoes.length === total) {
        return;
      }

      setLoading(true);

      const response = await api.get('adote/ong_id', {
        params: {page, ong_id}
      });
  
      setAdocoes([...adocoes, ...response.data]);
      setTotal(response.headers['x-total-count']);
      setPage(page + 1);
      setLoading(false);

    }
  
    useEffect(() => {
      loadAdocoes();
    }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={adocoes}
        style={styles.incidentList}
        keyExtractor={Adocao => String(Adocao.id)}
        onEndReached={loadAdocoes}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: Adocao }) => (
          <View style={styles.incident}>
           <View style={{width:'50%'}}>
              <Image source={{uri:'https://media.gazetadopovo.com.br/viver-bem/2018/11/dog3-768x587-0e01be20.jpg'}} style={{height:100, width:100}} />
           </View>

           <View style={{width:'50%'}}>
           <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NOME:</Text>
           <Text style={styles.incidentValue}>{Adocao.nome}</Text>

           <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
           <Text style={styles.incidentValue}>{Adocao.descricao}</Text>
           </View>   

          </View>
        )}
      />
    </View>
  );
}
