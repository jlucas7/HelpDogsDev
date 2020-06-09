import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Carousel from '../../components/Carousel/carousel';
import { Entypo, FontAwesome5 } from 'react-native-vector-icons';

import styles from './styles';

export default function Home() {
  const route = useRoute();
  const navigation = useNavigation();

  const ongId = route.params.ong_id;

  const dummyData =
    [
      {
        title: 'Adoção Consciente',
        url: 'https://cdn.pixabay.com/photo/2015/10/12/14/57/dogs-984015_960_720.jpg',
        description: "Adote, porque o amor não tem preço nem raça.",
        id: 1

      },
      {
        title: 'Adoção Consciente',
        url: 'https://cdn.pixabay.com/photo/2015/11/17/13/13/dogue-de-bordeaux-1047521_960_720.jpg',
        description: "Adotamos um ao outro,  simples  assim: porque eu precisava dele  e ele de mim.",
        id: 2
      },
      {
        title: 'Adoção Consciente',
        url: 'https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760_960_720.jpg',
        description: "Adotar e abrir o coração, faz bem para alma e manda embora a solidão.",
        id: 3
      }
    ]

  function navigateToIncident(ong_id) {
    navigation.navigate('Incidents', { ong_id });
  }

  function navigateToLocation() {
    navigation.navigate('Location');
  }

  return (
    <View style={styles.containerExterno}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          <Carousel data={dummyData}/>
          <View style={styles.container}>
            <View style={styles.cardView}>
              <View style={styles.containerCard}>
                <View style={styles.card}>
                  <TouchableOpacity onPress={() => navigateToIncident(ongId)}>
                    <Text style={[styles.cardTitle, {fontSize:15, paddingBottom:0, fontWeight:"bold"}]}><FontAwesome5 name="hands-helping" size={22} color="#FFF" />  AJUDE</Text>
                    <Text style={[styles.cardTitle,{fontSize:12,paddingTop:0}]}>           Colabore conosco</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.card}>
                  <Text style={[styles.cardTitle, {fontSize:15, paddingBottom:0, fontWeight:"bold"}]}><Entypo name="baidu" size={22} color="#FFF" />  ADOTE</Text>
                  <Text style={[styles.cardTitle,{fontSize:12,paddingTop:0}]}>         Faça parte</Text>
                </View>
              </View>

              <View style={styles.containerCard}>
              <View style={styles.card}>
                <TouchableOpacity onPress={() => navigateToLocation()}>
                  <Text style={[styles.cardTitle, {fontSize:15, paddingBottom:0, fontWeight:"bold"}]}> <Entypo name="location" size={22} color="#FFF" />  LOCALIZAÇÃO</Text>
                  <Text style={[styles.cardTitle,{fontSize:12,paddingTop:0}]}>           Encontre-nos</Text>
                </TouchableOpacity>
              </View>

                <View style={[styles.card, {backgroundColor: '#F2C94C'}]}>
                </View>
              </View>

            </View>
            <View style={styles.info}>
              <Text style={{
                fontSize: 23,
                color: '#381564',
                fontWeight: 'bold',
                borderBottomColor: "#381564",
                borderBottomWidth: 1,
                marginHorizontal: 5,
                marginBottom: 8
              }}>
                <Entypo name="location-pin" size={22} color="#381564" /> Endereço da ONG
                </Text>
              <Text style={{ fontSize: 18, marginHorizontal:10, fontWeight: 'bold', color:"#381564"}}>ONG Parque Bela Vista</Text>
              <Text style={{ marginVertical: 5, fontSize: 16, marginHorizontal: 10 }}>
                Avenida Silva Santos, 4360
              </Text>
              <Text style={{ marginVertical: 5, fontSize: 16, marginHorizontal: 10 }}>
                <Text style={{fontSize: 16, fontWeight: 'bold' }}>Telefone:</Text>  (71) 99999-9999
              </Text>
              <Text style={{ marginTop:5, fontSize: 16, marginHorizontal: 10, fontWeight: 'bold' }}>
                Horário de funcionamento:
              </Text>
              <Text style={{ fontSize: 16, marginHorizontal: 10 }}>
                Todos os dias - 09:00 às 22:00
              </Text>
            </View>
          </View>
        </>
      </ScrollView>
    </View >
  );
}
