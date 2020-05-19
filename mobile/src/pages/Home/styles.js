import { StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';

//const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: '#F2C94C'
  },

  cardView:{
    flex: 1,
/*     width: width,
    height: height / 3, */
    //backgroundColor: 'white',
    margin: 50,
    borderRadius: 10,
    flexDirection: "column"
  },

  cardCima:{
    flex:1,
    backgroundColor: '#381564',
    borderRadius: 10,
    marginBottom:5
  },

  cardBaixo:{
    flex:1,
    backgroundColor: '#381564',
    borderRadius: 10,
    marginTop:5
  },

  cardTitle:{
    marginTop:30,
    color:'white',
    textAlign:"center",
    fontSize:40
  },

   info:{
/*     flex: 1,
    //margin: 30,
    backgroundColor: 'white',
    flexDirection: "column" */
  } 
});