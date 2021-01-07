 import React, { useState } from 'react';


import {View , Button, TextInput, ScrollView, StyleSheet} from 'react-native'
import { Value } from 'react-native-reanimated';

const CreateUserScreen = () => {

        const [state, setState] = ueseState({
            name:'',
            email:'',
            phone:''
        })
        const handleChangeText = (name, value)=>{
            setState({ ...state, [name]: value})
        }

    return (
      <ScrollView style ={ styles.container}>
          <View style ={ styles.inputGroup}>
              <TextInput placeholder="Name User" 
              onChangeText={(value) =handleChangeText('name', value)}
              />
          </View>
          <View style ={ styles.inputGroup}>
              <TextInput placeholder="Email User"
               onChangeText={(value) =handleChangeText('name', value)}
              />
          </View>
          <View style ={ styles.inputGroup}>
              <TextInput placeholder="Phone User"
               onChangeText={(value) =handleChangeText('name', value)}
              />
          </View>
          <View>
              <Button title="Save User" />
          </View>
      </ScrollView>
      );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 35,
    },
    inputGroup:{
        flex: 1,
        padding:0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})
 
export default CreateUserScreen;9