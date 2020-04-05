import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles';

const Incidents = () => {
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
    </SafeAreaView>
  );
};

export default Incidents;
