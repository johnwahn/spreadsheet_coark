import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import ImagePicker, { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const options = {
        title: 'Select Image',
        mediaType: 'photo',
        selectionLimit: 1,
        includeBase64: true,
    }

    const selectImage = async () => {
        const images = await launchImageLibrary(options);
        const formData = new FormData()

        console.log("images is ", images)

        // Extract base64 data from the image object
        const base64Data = `data:${images.assets[0].type};base64,${images.assets[0].base64}`;

        // Create a Blob from the base64 data
        const blob = await (await fetch(base64Data)).blob();
            
        formData.append('file', blob, images.assets[0]);

        let res = await fetch(
            'http://localhost:3000/api/uploadImage',
            {
                method: 'POST',
                body: formData,
            }
        );
        let responseJson = await res.json();

        console.log(responseJson, "responseJson ");
    };
  
    return (
      <View style={styles.container}>
        <Pressable onPress={selectImage}>
          <Text>Select Image</Text>
          </Pressable>
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
