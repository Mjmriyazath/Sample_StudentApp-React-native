import {Image, StyleSheet, Text, View} from "react-native";
import {students} from "./StudentsDb";

export default function Profile({ route, navigation }){
    const {sid} = route.params;
    let student =students.filter(stu=>stu.studentId === sid )
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/dpslogo.png')}/>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.details}>Student ID:{student[0].studentId}</Text>
                <Text style={styles.details}>First Name:{student[0].firstName}</Text>
                <Text style={styles.details}>Last Name:{student[0].lastName}</Text>
                <Text style={styles.details}>Course:{student[0].course}</Text>
                <Text style={styles.details}>Gender:{student[0].gender}</Text>
                <Text style={styles.details}>Age:{student[0].age}</Text>
                <Text style={styles.details}>Address:{student[0].address.city +"," +student[0].address.country}</Text>
                <Text style={styles.details}>Skills:{
                    student[0].skills.map(skill=>skill += ",")
                }</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white',
    },
    contentContainer: {
        flex: 5,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
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
    details: {
        paddingVertical: 10,
        color: "#333333",
        textAlign: "left",
        fontSize: 20,
        fontWeight: "bold",
    }
});