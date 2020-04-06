import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  Linking,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';

import styles from './styles';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const item = route.params.incident;

  const subject = `Herói do caso: ${item.title}`;
  const message =
    `Olá, ${item.name}. Estou entrando em contato, pois gostaria de ` +
    `ajudar no caso "${item.title}", com o valor de ${Intl.NumberFormat(
      'pt-BR',
      { style: 'currency', currency: 'BRL' },
    ).format(item.value)}`;

  const emailUrl = `mailto:${item.email}?subject=${subject}&body=${message}`;
  const whatsAppUrl = `whatsapp://send?text=${message}&phone=${item.whatsapp}`;

  const navigateBack = () => {
    navigation.goBack();
  };

  const sendEmail = async () => {
    try {
      const isSupported = await Linking.canOpenURL(emailUrl);

      if (isSupported) {
        Linking.openURL(emailUrl);
      }
    } catch (err) {
      Alert.alert('Erro', 'Não é possível enviar e-mail nesse aparelho!');
    }
  };

  const sendWhatsApp = async () => {
    try {
      const isSupported = await Linking.canOpenURL(whatsAppUrl);

      if (isSupported) {
        Linking.openURL(whatsAppUrl);
      }
    } catch (err) {
      Alert.alert('Erro', 'Não é possível enviar WhatsApp nesse aparelho!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigateBack()}>
          <Icon name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>

        <Image source={logo} />
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, styles.mt0]}>ONG:</Text>
        <Text style={styles.incidentValue}>
          {item.name} de {item.city}/{item.uf}
        </Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{item.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(item.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.action}
            onPress={() => sendWhatsApp()}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={() => sendEmail()}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
