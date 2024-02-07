import {Image, StyleSheet, Text, View} from "react-native";
import {students} from "./StudentsDb";
export default function Summary(){
    const numberOfStudents = students.length;
    const numberOfmales = students.filter(stu=>stu.gender === "Male" ).length;
    const numberOfemales = students.filter(stu=>stu.gender === "Female" ).length;
    const countries =()=>{
        let country=[];
        for ( let student of students) {
            if (!country.includes(student.address.country.toString())){
                country.push(student.address.country)
            }
        }
        return country
    }
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/dpslogo.png')}/>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.details}>Total number of students:{numberOfStudents}</Text>
                <Text style={styles.details}>Total number of males:{numberOfmales}</Text>
                <Text style={styles.details}>Total number of female:{numberOfemales}</Text>
                <Text style={styles.details}>Countries:{countries().map(item=>item += ",")}</Text>
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