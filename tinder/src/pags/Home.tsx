import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Btn01 from "../components/btn01";
import Btn02 from "../components/btn02";
import Fontisto from "react-native-vector-icons/Fontisto"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Foundation from "react-native-vector-icons/Foundation"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Btn01 />
        <View style={styles.icone}>
            <Fontisto name="tinder" size={50} color="red" />
        </View>
        <Btn02 />
      </View>
      <View style={styles.principal}>
        <ImageBackground source={require('../../assets/boeck.gif')} style={styles.foto} >
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0)']} style={styles.gradient}
            start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} />
            <View style={styles.metade01}>
                <View style={styles.scroll}>
                    <View style={styles.barra01} />
                    <View style={styles.barra02} />
                    <View style={styles.barra02} />
                </View>
            </View>
            <View style={styles.metade02}>
                <View style={styles.metade03}>
                    <View style={styles.nome}>
                        <Text style={styles.texto03} >
                            Lucas Boeck
                        </Text>
                    </View>
                    <View style={styles.idade}>
                        <Text style={styles.texto04} >
                            24
                        </Text>
                    </View>
                </View>
                <View style={styles.metade04}>
                    <View style={styles.metade05}>
                        <View style={styles.trabalho}>
                            <MaterialIcons name="work" size={25} color="white"/>
                            <Text style={styles.texto01} >
                                Programador
                            </Text>
                        </View>
                        <View style={styles.distancia}>
                            <EvilIcons name="location" size={25} color="white" />
                            <Text style={styles.texto01} >
                                2 miles away
                            </Text>
                        </View>
                    </View>
                    <View style={styles.metade06}>
                        <View style={styles.info}>
                            <Foundation name="info" size={40} color="white" />
                        </View>
                </View>
                </View>
            </View>
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        <View style={styles.quad1}>
            <FontAwesome name="undo" size={35} color="yellow" />
        </View>
        <View style={styles.quad2}>
            <FontAwesome6 name="xmark" size={55} color="red" />
        </View>
        <View style={styles.quad1}>
            <FontAwesome name="star" size={35} color="blue" />
        </View>
        <View style={styles.quad2}>
            <FontAwesome name="heart" size={48} color="green" />
        </View>
        <View style={styles.quad1}>
            <MaterialCommunityIcons name="lightning-bolt" size={35} color="purple" />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topo: {
    flex: 0.15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  perfil: {
    height: "48%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    elevation: 8,
  },
  icone: {
    height: "68%",
    width: "22%",
    justifyContent: "center",
    alignItems: "center",
  },
  mensagem: {
    height: "48%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    elevation: 8,
  },
  principal: {
    flex: 0.7,
    width: "95%",
    borderRadius: 6,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    borderRadius: 6,
    elevation: 8,
    ...StyleSheet.absoluteFillObject,
  },
  foto: {
    height: "100%",
    width: "100%",
    borderRadius: 6,
    justifyContent: "space-evenly",
    elevation: 8,
  },
  metade01: {
    flex: 0.8,
    width: "100%",
  },
  scroll: {
    flex: 0.02,
    width: "100%",
    marginTop: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  barra01: {
    width: "32%",
    height: "60%",
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 8,
  },
  barra02: {
    width: "32%",
    height: "60%",
    borderRadius: 20,
    backgroundColor: "gray",
    elevation: 8,
  },
  metade02: {
    flex: 0.25,
    width: "100%",
  },
  metade03: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    padding: 8,
    gap: 10,
    marginBottom: -20,
  },
  nome: {
    width: "auto",
    flexWrap: "wrap",
  },
  idade: {
    width: "auto",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  metade04: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    padding: 8,
  },
  metade05: {
    height: "50%",
    width: "80%",
  },
  trabalho: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  distancia: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  metade06: {
    height: "100%",
    width: "20%",
  },
  info: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 0.15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  quad1: {
    height: "48%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    elevation: 8,
  },
  quad2: {
    height: "68%",
    width: "22%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    elevation: 8,
  },
  texto01: {
    color: "white",
    textShadowRadius: 10,
    textShadowOffset: { width: -1, height: 1},
    textShadowColor: "black",
  },
  texto02: {
    fontWeight: "bold",
    color: "white",
    textShadowRadius: 10,
    textShadowOffset: { width: -1, height: 1},
    textShadowColor: "black",
  },
  texto03: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textShadowRadius: 10,
    textShadowOffset: { width: -1, height: 1},
    textShadowColor: "black",
  },
  texto04: {
    fontSize: 20,
    color: "white",
    textShadowRadius: 10,
    textShadowOffset: { width: -1, height: 1},
    textShadowColor: "black",
  },
});
