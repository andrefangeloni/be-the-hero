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
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';

import styles from './styles';

const Details = () => {
  const navigation = useNavigation();

  const mailTo = 'contato@apad.org';
  const subject = 'Herói do caso: Cadelinha atropelada';
  const message =
    'Olá, APAD. Estou entrando em contato, pois gostaria de ' +
    'ajudar no caso "Cadelinha atropelada", com o valor de R$ 120,00';
  const phone = '5519996196099';
  const emailUrl = `mailto:${mailTo}?subject=${subject}&body=${message}`;
  const whatsAppUrl = `whatsapp://send?text=${message}&phone=${phone}`;

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
        <Image source={logo} />

        <TouchableOpacity onPress={() => navigateBack()}>
          <Icon name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, styles.mt0]}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
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
