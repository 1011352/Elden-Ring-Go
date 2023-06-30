// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
// import React, { useEffect, useState } from "react";
// import {
//     TouchableOpacity,
//     StyleSheet,
//     View,
//     Text,
//     SafeAreaView,
//     ActivityIndicator,
//     FlatList,
//     Image,
// } from "react-native";

// const ProfileScreen = () => {
//     const [isLoading, setLoading] = useState(true);
//     const [bosses, setBosses] = useState([]);

//     const getBosses = async () => {
//         try {
//             const response = await fetch(
//                 "https://eldenring.fanapis.com/api/bosses?limit=100"
//             );
//             const json = await response.json();
//             setBosses(json.data);
//             console.log(bosses);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getBosses();
//     }, []);

//     return (
//         <View style={styles.container}>
//             {isLoading ? (
//                 <ActivityIndicator />
//             ) : (
//                 <FlatList
//                     data={bosses}
//                     keyExtractor={({ id }) => id}
//                     renderItem={({ item }) => (
//                         (<Text style={styles.list}>{item.name}</Text>)
//                     )}
//                 />
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     button: {
//         alignItems: "center",
//         backgroundColor: "#DDDDDD",
//         padding: 10,
//         width: 300,
//         marginTop: 16,
//     },
//     container: {
//         backgroundColor: "#022123",
//         flex: 1,
//     },
//     list: {
//         color: "#fdeb63",
//         fontSize: 20,
//     },
//     list2: {
//       color: "white",
//       fontSize: 10,
//   },
// });
// export default ProfileScreen;
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


const CardScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [bosses, setBosses] = useState([]);

    const getBosses = async () => {
        try {
            const response = await fetch(
                "https://eldenring.fanapis.com/api/bosses?limit=100"
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
        getBosses();
    }, []);
    return (
      <SafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
         {isLoading ? (
                <ActivityIndicator />
            ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Places to stay</Text>
  
          {bosses.map((boss) => {
            return (
              <TouchableOpacity
                key={boss.id}
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.card}>
                  <View style={styles.cardLikeWrapper}>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                      }}>

                    </TouchableOpacity>
                  </View>
  
                  <View style={styles.cardTop}>
                    <Image
                      alt=""
                      resizeMode="cover"
                      style={styles.cardImg}
                      source={{ uri: boss.image }}
                    />
                  </View>
  
                  <View style={styles.cardBody}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.cardTitle}>{boss.name}</Text>
                    </View>
  
                    <View style={styles.cardFooter}>
                      <Text style={styles.cardReviews}>{boss.description}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
            )}
      </SafeAreaView>
    );
  }

  export default CardScreen;
  
  const styles = StyleSheet.create({
    container: {
      padding: 24,
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      color: '#1d1d1d',
      marginBottom: 12,
    },
    card: {
      position: 'relative',
      borderRadius: 8,
      backgroundColor: '#fff',
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    cardLike: {
      width: 48,
      height: 48,
      borderRadius: 9999,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardLikeWrapper: {
      position: 'absolute',
      Index: 1,
      top: 12,
      right: 12,
    },
    cardTop: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    cardImg: {
      width: '100%',
      height: 160,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    cardBody: {
      padding: 12,
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    cardTitle: {
      fontSize: 17,
      fontWeight: '500',
      color: '#232425',
    },
    cardPrice: {
      fontSize: 15,
      fontWeight: '400',
      color: '#232425',
    },
    cardFooter: {
      marginTop: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    cardStars: {
      marginLeft: 2,
      marginRight: 6,
      fontSize: 14,
      fontWeight: '500',
      color: '#232425',
    },
    cardReviews: {
      fontSize: 14,
      fontWeight: '400',
      color: '#595a63',
    },
  });