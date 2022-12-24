import { React } from 'react';
import { View, StyleSheet,Text } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        marginTop:30,
        backgroundColor:'black',
        
    },
    title:{
        color:'#fff',
        padding:20 ,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    }
})