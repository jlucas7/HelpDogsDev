import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

export default function Detail() {
  const route = useRoute();

  const incident = route.params.incident;
 /*  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;

  function sendMail() { 
    MailComposer.composeAsync({
      subject: `Ajudando no caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  function sendWhatsapp() { 
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  } */

  return (
    <View style={styles.container}>

    </View>
  );
}
