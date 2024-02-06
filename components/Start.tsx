import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';

const Start = () => {
    const [inputRow, setInputRow] = useState(null)
    const [inputCol, setInputCol] = useState(null)

    const createSpreadSheet = () => {

    }
    return(
 <View style={styles.container}>
    <Text>Welcome! Choose Your Table Size.</Text>
    <View style={styles.inputContainer}>
        <Text>Row: </Text>
        <TextInput 
            style={{width: 200, borderWidth: 2, marginRight: 10}} 
            placeholder='Enter Row Size'
            value={inputRow}/>
        <Text>Column: </Text>
        <TextInput 
            style={{width: 200, borderWidth: 2, marginRight: 10}} 
            placeholder='Enter Column Size'
            value={inputCol}/>
    </View>
    <Button title="Create Table" onPress={createSpreadSheet}/>

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
