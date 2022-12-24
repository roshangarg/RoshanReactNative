
import { React, useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard } from "react-native";
import AddTodos from "./Components/AddTodos";
import Header from "./Components/Header";

import TodoItem from "./Components/TodoItem";

export default function App() {
  
  const [todos , setTodos ] = useState([
    {
      text:'roshan',
      id :1
    },
    {
      text:'Rahul',
      id :2
    },
    {
      text:'Rohit',
      id :3
    }
  ])
  
  const pressHandler = (id) => {
        setTodos((prevTodos)=>(
          prevTodos.filter(todos =>  todos.id !=id ) 

        ))
  }  

  const submitHandler = (text) => {
    if(text.length >3){

      setTodos((prevTodos) => (
        [
          {text:text, id : Math.random().toString()},
          ...prevTodos
        ]
        ))
      }
      else{
        Alert.alert('OOps',"Todos must be greater than 3 char ",
        [
          {text:'Understood', onPress :()=>console.log('Closed')}
        ])
      }
  }
  return (
    // <SandBod/>
  <TouchableWithoutFeedback  
  onPress={()=> {
    Keyboard.dismiss();
  }}
  >

  
    <View style={styles.container}>
      {/* Header */}
      <Header/>
        <View style={styles.content}>
          <AddTodos submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
             data={todos}
             keyExtractor={(item) => item.id}
             renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
             )}
            />

          </View>
        </View> 
     

    </View>
    </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content:{
    padding:40,
    flex:1
  },
  list:{
    flex:1,
    marginTop:10
  }


},

);
