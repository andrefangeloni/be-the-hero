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
});

export default styles;
