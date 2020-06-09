import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import styles from './styles';

export default function Location() {
    const [region, setRegion] = useState();

    async function loadRegion() {

        await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=40220050&key=AIzaSyAT3GB0fdI8uG-5MdlfAWachPU5AKRFQ7Q`)
            .then(res => res.json())
            .then(res => { setRegion(res.results[0].geometry.location);});   
    } 
 
    useEffect(() => {
        loadRegion();
      }, []);

    return (
    <View style={styles.container}>
        <MapView style={styles.mapStyle}
            loadingEnabled = {true}
            region={{
                latitude: -13.0040789, 
                longitude: -38.4936977,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,}}
        >
            <Marker
            coordinate={{               
                latitude: -13.0040789, 
                longitude: -38.4936977,}}
            title={'ONG HelpDogs'}
            description={'Ola, Estamos esperando a sua visita !!'}
            />

        </MapView>
    
    </View>
    );
}
