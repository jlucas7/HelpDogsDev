import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  containerExterno:{
    flex: 1,
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: '#F2C94C'
  },
/*   -------------------------------------------------------------------------------------------------------------- */
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  /* -------------------------------------------------------------------------------------------------------------- */
  container: {
    //flex: 1,
    paddingHorizontal: 20,
  },

  cardView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical:50,
    borderRadius: 10,
    flexDirection: "column",
  },

  containerCard:{
    flexDirection:"row"
  },

  card:{
    flex:1,
    backgroundColor: '#381564',
    borderRadius: 10,
    height:80,
    margin:2,
    padding:8
  },

  cardTitle: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 13,
  },

  info: {
    paddingTop:36,
    flexDirection: "column",
    marginBottom: 30,
  }
});