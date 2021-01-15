import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import {View , StyleSheet,  TextInput, ScrollView, Button} from 'react-native'

import firebase from '../database/firebase'

const UserDetailScreen = (props) => {

    const [user, setUser] = useState({
        name:'',
        email:'',
        phone:''
    }) 
   // console.log(props.route.params.userId)

   const [loading, setLoading] = useState(true);

   const handleChangeText = (name, value)=>{
    setUser({ ...user, [name]: value})
}

const deleteUser = async() => {
    const dbRef= firebase.db.collection('users').doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate('UserList')
}

    const getUserById = async(id)  => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get();
        const user = doc.data();
       // console.log(loading)
        setUser({
            ...user,
            id: doc.id,
            
        });
        setLoading(false)
    }
    useEffect(() => {
        getUserById(props.route.params.userId);
    },[])

    if (loading) {
        return(
        <View>
            <ActivityIndicator size="large" color="#9e9e9e" />
        </View>
        )
    }

    return (
        <ScrollView style ={ styles.container}>
          <View style ={ styles.inputGroup}>
              <TextInput placeholder="Name User" 
              value={user.name}
             onChangeText={(value) =>handleChangeText('name', value)}
              />
          </View>
          <View style ={ styles.inputGroup}>
              <TextInput placeholder="Email User"
              value={user.email}
               onChangeText={(value) =>handleChangeText('email', value)}
              />
          </View>
          <View style ={ styles.inputGroup}>
              <TextInput placeholder="Phone User"
              value={user.phone}
              onChangeText={(value) =>handleChangeText('phone', value)}
              />
          </View>
          <View style ={ styles.container}>
              <Button title="Update User" onPress={() => alert('worked')} />
              
          </View>
          <View style ={ styles.container}>
              <Button color="#E37399"title="Delete User" onPress={() => deleteUser()} />
              
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
export default UserDetailScreen;