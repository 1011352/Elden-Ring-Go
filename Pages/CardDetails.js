import React, { useEffect, useState } from "react";
import {SafeAreaView, StyleSheet,TouchableOpacity, Text, View, ActivityIndicator, ScrollView, Image} from 'react-native';
import { useRoute } from "@react-navigation/native"




const CardDetails = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [bosses, setBosses] = useState([]);

    const route = useRoute()
    const id = route.params.id

    const getBoss = async () => {
        try {
            const response = await fetch(
                "https://eldenring.fanapis.com/api/bosses/" + id
            );
            const json = await response.json();
            setBosses(json.data);
            console.log(bosses);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getBoss();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
         {isLoading ? (
                <ActivityIndicator />
            ) : (
        <ScrollView>
    <View>
    <Image
     alt=""
     resizeMode="cover"
     style={styles.cardImg}
     source={{ uri: bosses.image }}/>
    <Text style={styles.textStyling1}>Boss Name: {bosses.name}</Text>
    <Text style={styles.textStyling2}>Location: {bosses.location}</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={styles.textStyling3}>description: {bosses.description}</Text>
    </View>
    <TouchableOpacity
    style={styles.viewStyling}
    onPress={() => navigation.navigate('CardScreen')}>
    <Text style = {styles.textStylingButton}>Back</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
            )}
    </SafeAreaView>
    )
}
export default CardDetails

const styles = StyleSheet.create({
    textStyling1: {
            fontSize: 22,
            fontStyle:'italic',
            color: '#fdeb63'
    },
    textStyling2: {
            fontSize: 20,
            fontStyle:'italic',
            color: '#fdeb63'
    },
    textStyling3: {
            fontSize: 20,
            fontStyle:'italic',
            color: '#fdeb03'
    },
    cardImg: {
        width: '100%',
        height: 250,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#147EFB',
        padding: 10,
        width: 300,
        marginTop: 16,
        borderRadius: 20,
    
      },
    viewStyling: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
    },
    textStylingButton: {
            fontSize: 30,
            fontStyle:'italic',
            color: 'white',
            padding: 5
    },
    container: {
        backgroundColor: "#022123",
        flex: 1,
    },
});