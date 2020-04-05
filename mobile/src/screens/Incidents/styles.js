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
  headerText: {
    fontSize: 15,
    color: '#737380',
  },
  bold: {
    fontWeight: 'bold',
  },
  title: {
    marginTop: 48,
    marginBottom: 16,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#13131a',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },
  incidentList: {
    marginTop: 32,
  },
  incident: {
    padding: 24,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  incidentProperty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#41414d',
  },
  incidentValue: {
    marginTop: 8,
    marginBottom: 15,
    fontSize: 15,
    color: '#737380',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e02041',
  },
});

export default styles;
