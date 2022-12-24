import { React } from 'react';
import { View ,Text,StyleSheet ,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function TodoItem({item, pressHandler}){

    return (
    
    <View style={styles.item}>
    
    <Text style={{flex:1, color:'white',fontSize:20,}} >{item.text}</Text>
    <MaterialIcons  onPress={() => pressHandler(item.id)} name="delete" size={24} color="black" />
    </View>
     
    )
}


const styles = StyleSheet.create({
   item:{
    padding:16,
    marginTop:10,
    borderRadius:10,
    backgroundColor:'gray',
    borderWidth:1,
    borderStyle:'solid',
    color:'white',
    fontWeight:'bold',
    flexDirection:'row',
    

   }
})