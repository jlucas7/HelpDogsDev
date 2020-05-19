import React, { useState, useEffect } from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import styles from './styles';

export default function Ongs() {
  const [ongs, setOngs] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

/*   function navigateToIncident(ong_id) { 
    navigation.navigate('Incidents', { ong_id }); 
  }  */

  function navigateToHome(ong_id){
    navigation.navigate('Home', { ong_id });
  }

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

    setOngs([...ongs, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadOngs();
  }, []);
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Colabore conosco!</Text>
      <Text style={styles.description}>Por um Mundo Onde o Bem-Estar Animal Importe e a Crueldade Contra os Animais Tenha Fim.</Text>

      <FlatList 
        data={ongs}
        style={styles.ongList}
        keyExtractor={ong => ong.id}
        onEndReached={loadOngs}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: ong }) => (
            <TouchableOpacity 
                onPress={() => navigateToHome(ong.id)} 
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
