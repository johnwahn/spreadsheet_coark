import React, { useState } from 'react';
import { Pressable, View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

interface NavigationParams {
   numberOfResturants: string;
   tableName: string;
}

const Start = () => {
    const [numberInput, setNumberInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [paramList, setParamList] = useState([]);
    const navigation = useNavigation();
    
   /* const params: NavigationParams = {
      numberOfResturants: numberInput,
      tableNames: tableNameInputs,
    };*/

    const updateTableListContent = () => {
      const params: NavigationParams = {
         numberOfResturants: numberInput,
         tableName: nameInput,
       };
      setParamList([...paramList, params]);
    }

    const navigateToSpreadSheet = (params) => {
      navigation.navigate('Spreadsheet', params);
    }


    return(
 <View style={styles.container}>
    <Text>Welcome!.</Text>
    <View style={styles.inputContainer}>
      <Text>Name : </Text>
      <TextInput 
            style={{width: 200, borderWidth: 2, marginRight: 10}} 
            placeholder='Enter Name'
            onChangeText={text => setNameInput(text)}
            value={nameInput}
            />
        <Text>How Many Resturants?: </Text>
        <TextInput 
            style={{width: 200, borderWidth: 2, marginRight: 10}} 
            placeholder='Enter number'
            onChangeText={text => setNumberInput(text)}
            value={numberInput}/>
    </View>
    <Pressable role="button" style={{borderColor: 'red'}} onPress={updateTableListContent}>
        <Text>Create Table</Text>
    </Pressable>
      {/* Display Table Names as Pressable Links */}
      {paramList.length > 0 && (
      <View>
         {paramList.map((params, index) => (
         <Pressable role = "button" onPress={() => navigateToSpreadSheet(params)}  key={index}>
            <Text>{params.tableName}</Text>
         </Pressable>
         ))}
      </View>
      )}
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
