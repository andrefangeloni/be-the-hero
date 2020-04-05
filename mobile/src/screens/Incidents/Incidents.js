import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';

import styles from './styles';

const Incidents = () => {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de<Text style={styles.bold}> 0 </Text>casos
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolhe um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={[1, 2, 3]}
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        keyExtractor={incident => incident.toString()}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$ 120,00</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetails()}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Icon name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Incidents;
