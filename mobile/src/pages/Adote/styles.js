import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: '#F2C94C'
  },

  headerText: {
    marginTop: 28,
    color: '#381564',
    fontSize: 15,
  }, 

   headerTextBold: {
    color: '#381564',
    fontWeight: 'bold'
  }, 

  description: {
    marginTop: 24,
    color: '#381564',
    fontSize: 16,
    lineHeight: 24,
  },

  incidentList: {
    marginTop: 10,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    flexDirection: "row"
  },

  incidentProperty: {
    color: '#381564',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 24,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380'
  },
  
});