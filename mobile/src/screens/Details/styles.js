import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  incident: {
    padding: 24,
    marginTop: 48,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  incidentProperty: {
    marginTop: 24,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#41414d',
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },
  contactBox: {
    padding: 24,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#13131a',
  },
  heroDescription: {
    marginTop: 16,
    fontSize: 15,
    color: '#737380',
  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    height: 50,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#e02041',
  },
  actionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  mt0: {
    marginTop: 0,
  },
});

export default styles;
