import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import Carousel from '../../components/Carousel/carousel'
//import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

export default function Home() {
  const route = useRoute();
  const navigation = useNavigation();

  const ongId = route.params.ong_id;

  const dummyData =
        [{
                title: 'Adoção Consciente', url: 'https://cdn.pixabay.com/photo/2015/10/12/14/57/dogs-984015_960_720.jpg',
                description: "Adote, porque o amor não tem preço nem raça.",
                id: 1

        },
        {
                title: 'Adoção Consciente', url: 'https://cdn.pixabay.com/photo/2015/11/17/13/13/dogue-de-bordeaux-1047521_960_720.jpg',
                description: "Adotamos um ao outro,  simples  assim: porque eu precisava dele  e ele de mim.",
                id: 2
        },
        {
                title: 'Adoção Consciente', url: 'https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760_960_720.jpg',
                description: "Adotar e abrir o coração, faz bem para alma e manda embora a solidão.",
                id: 3
        }]
  
  function navigateToIncident(ong_id) { 
    navigation.navigate('Incidents', { ong_id }); 
  }      

  return (
    <ScrollView>
      <View style={styles.container}>
          <Carousel data = {dummyData}/>
          <View style={styles.cardView}>

            <View style={styles.cardCima}>
              <TouchableOpacity onPress={() => navigateToIncident(ongId)}>  
                <Text style={styles.cardTitle}>Ajude</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardBaixo}>
              <Text style={styles.cardTitle}>Adote</Text>
            </View>

          </View>
          <View style={styles.info}>
            {/* <Icon name="enviroment" size={20} color="#381564" /> */}
          </View>
      </View>
    </ScrollView>
  );
}
