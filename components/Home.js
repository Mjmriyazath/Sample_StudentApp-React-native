import {Image, Pressable, Text, View,StyleSheet} from "react-native";

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/dpslogo.png')}/>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Welcome to Department of Physical Science Students Portal </Text>
                <Pressable style={styles.button} onPress={()=>{navigation.navigate('list')}} >
                    <Text style={styles.text}>Students List</Text>
                </Pressable>
                <Pressable style={styles.button}  onPress={()=>{navigation.navigate('summary')}}>
                    <Text style={styles.text}>Summary Info</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    contentContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#023E8A',
    },
    logo: {
        height: 200,
        width: 300,
        resizeMode: "contain",
    },
    title: {
        marginTop: 48,
        paddingVertical: 10,
        color: "#333333",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        margin:10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});