import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#F2C94C'
    //backgroundColor: '#E5E5E5'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    marginTop: 28,
    color: '#381564',
    fontSize: 15,
    //color: '#737380',
  },

  headerTextBold: {
    color: '#381564',
    fontWeight: 'bold'
  },

  description: {
    marginTop: 28,
    color: '#381564',
    fontSize: 16,
    lineHeight: 24,
    //color: '#737380'
  },

  incidentList: {
    marginTop: 10,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',//FFF
    marginBottom: 16,
  },

  incidentProperty: {
    color: '#381564',
    fontSize: 14,
    //color: '#41414d',
    fontWeight: 'bold'
  },

  incidentValue: {
    //color: '#381564',
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    //color: '#e02041',
    color: '#381564', //381564
    fontSize: 15,
    fontWeight: 'bold'
  },
});