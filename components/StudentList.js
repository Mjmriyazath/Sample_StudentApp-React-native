import {FlatList, View, Text, ScrollView, StyleSheet, Pressable} from "react-native";

const studentList=[
    { studentId: 'UOV15651',firstName: "James"},
    { studentId:'UOV15652',firstName: "Emily"},
    { studentId: 'UOV15653',firstName: "Michael"},
    { studentId: 'UOV15654',firstName: "Sophia"},
    { studentId: 'UOV15655',firstName: "Daniel"},
    { studentId: 'UOV15656',firstName: "Olivia"},
    { studentId: 'UOV15657',firstName: "William"},
    { studentId: 'UOV15658',firstName: "Ava"},
    { studentId: 'UOV15659',firstName: "Liam"},
    { studentId: 'UOV15610',firstName: "Emma"},
    { studentId: 'UOV15611',firstName: "Noah"},
    { studentId: 'UOV15612',firstName: "Isabella"},
    { studentId: 'UOV15613',firstName: "Mason"},
    { studentId: 'UOV15614',firstName: "Aria"},
    { studentId: 'UOV15615',firstName: "Ethan"},
    { studentId: 'UOV15616',firstName: "Grace"},
    { studentId: 'UOV15617',firstName: "Logan"} ,
    { studentId: 'UOV15618',firstName: "Mia"}
];

export default function StudentList({navigation}){
    const Item = ({detail,id}) => (
        <View style={styles.item}>
            <Pressable onPress={()=>{navigation.navigate('profile',{sid:id})}}>
                <Text style={styles.title}>{detail}</Text>
            </Pressable>

        </View>
    );
    const renderItem = ({ item }) => <Item detail={item.studentId +"-"+item.firstName} id={item.studentId}/>;
    return(
        <View style={styles.container}>
                <FlatList
                    data={studentList}
                    renderItem={renderItem}
                    keyExtractor={item => item.studentId}
                />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    item: {
        backgroundColor: '#1676e8',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:6
    },
    title: {
        color:'#f0f2f5',
        fontSize: 20,
    },
});