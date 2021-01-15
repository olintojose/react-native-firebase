import React, { useEffect, useState } from 'react';
import firebase from '../database/firebase'
import {View , Text, ScrollView, Button} from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'

const UserList = (props) => {

    const [ users, setUsers ] = useState([])

    useEffect (() => {
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            const users= [];
            querySnapshot.docs.forEach(doc => {

                //console.log(doc.data())
                const {name, email, phone } = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                   
                })
              
            })
            console.log(users)
            setUsers(users)
        })
    },[])
    return (
    <ScrollView>
        <Button 
        title="Create User" 
        onPress={() => props.navigation.navigate("CreateUserScreen")} 
        />
        {
            users.map(user => {
                return(
                    <ListItem
                    key={user.id}
                    bottomDivider
                    onPress={() => {props.navigation.navigate('UserDetailScreen',{
                        userId: user.id
                    })
                }}
                    >
                        <ListItem.Chevron/>
                        <Avatar
  rounded
  source={{
    uri:
      'https://media-exp1.licdn.com/dms/image/C4E03AQFmLo4daJK1Jg/profile-displayphoto-shrink_200_200/0/1593545640048?e=1616025600&v=beta&t=AIGUA9XedKzS4wCiJ3znE0ZVMzrsgQ6ROHrC7NdgULQ',
  }}
  //rounded
/>
                <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                        
                        </ListItem.Content>
                    </ListItem>

                )
            })
        }
    </ScrollView>
      );
}
 
export default UserList; 