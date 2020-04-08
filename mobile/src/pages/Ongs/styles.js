import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#F2C94C'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    color: '#381564',
    fontSize: 15,
  },

  headerTextBold: {
    color: '#381564',
    fontWeight: 'bold'
  },

  title: {
    color: '#381564',
    fontSize: 30,
    marginBottom: 16,
    marginTop: 20,
    fontWeight: 'bold'
  },

  description: {
    color: '#381564',
    fontSize: 16,
    lineHeight: 24,
  },

  ongList: {
    marginTop: 32,
  },

  ong: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    alignItems: "center"
  },

  ongProperty: {
    color: '#381564',
    fontSize: 14,
    fontWeight: 'bold'
  },

  ongValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 10,
    color: '#737380'
  },

  ongInfo: {
    flexDirection: 'row',
    alignItems: "flex-start",
  },

  ongInfoText: {
    padding: 10
  }
});