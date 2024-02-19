import React, { useState } from 'react';
import { Pressable, View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Start = () => {
    const [inputRow, setInputRow] = useState('')
    const navigation = useNavigation();

    const createSpreadSheet = () => {
       navigation.navigate('Spreadsheet', { numberOfResturants: inputRow})
    }
    return(
 <View style={styles.container}>
    <Text>Welcome!.</Text>
    <View style={styles.inputContainer}>
        <Text>How Many Resturants?: </Text>
        <TextInput 
            style={{width: 200, borderWidth: 2, marginRight: 10}} 
            placeholder='Enter number'
            onChangeText={text => setInputRow(text)}
            value={inputRow}/>
    </View>
    <Pressable style = {{borderColor: 'red'}} onPress={createSpreadSheet}>
        <Text>Create Table</Text>
    </Pressable>

 </View>
 );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    paddingBottom: 30,
    justifyContent: 'center', 
    alignItems:'center',
     },
     inputContainer: {
        margin: 10,
        flexDirection: 'row',
     }

});
export default Start;
