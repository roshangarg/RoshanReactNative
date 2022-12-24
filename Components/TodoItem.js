import { React } from 'react';
import { View ,Text,StyleSheet ,TouchableOpacity} from 'react-native';

export default function TodoItem({item, pressHandler}){

    return (
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
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
    fontWeight:'bold'

   }
})