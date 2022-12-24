
import React  from "react";
import { useState } from "react";
import { TextInput, View,StyleSheet ,Button} from "react-native";
export default function AddTodos({submitHandler}){
    const [text , setText] =useState('')
    console.log('text :>> ', text);
    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder='type something here '
            onChangeText={(val) => setText(val)}
            
            />
            <Button onPress={()=> submitHandler(text)} color='#000' title='Add Todo '/>
            
        </View>
    )
}
const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    padding:10,
    marginBottom:10

  }  
})