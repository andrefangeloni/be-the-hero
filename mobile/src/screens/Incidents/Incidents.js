import React, { useEffect, useState } from 'react';
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

import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [totalCases, setTotalCases] = useState([]);

  const navigation = useNavigation();

  const navigateToDetails = incident => {
    navigation.navigate('Details', { incident });
  };

  const loadIncidents = async () => {
    const { data, headers } = await api.get('/incidents');
    setIncidents(data);
    setTotalCases(headers['x-total-count']);
  };

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de<Text style={styles.bold}> {totalCases} </Text>casos
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(incident) => incident.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{item.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{item.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetails(item)}>
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
