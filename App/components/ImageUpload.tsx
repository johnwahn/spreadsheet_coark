import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import ImagePicker, { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const options = {
        title: 'Select Image',
        mediaType: 'photo',
        selectionLimit: 1,
        includeBase64: false,
    }

    const selectImage = async () => {
        const images = await launchImageLibrary(options);
        const formData = new FormData()
        
        formData.append('file',  {
            uri: images.assets[0].uri,
            type: images.assets[0].type,
            name: images.assets[0].fileName,
        })

        let res = await fetch(
            'http://localhost:19006',
            {
                method: 'post',
                body: formData,
                headers: {
                    'Content-Type' : 'multipart/form-data', 
                }
            }
        );
        let responseJson = await res.json();

        console.log(responseJson, "responseJson ");
    };
  
    return (
      <View style={styles.container}>
        <Button title="Select Image" onPress={selectImage} />
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 20,
    },
  });
  

export default ImageUpload;
