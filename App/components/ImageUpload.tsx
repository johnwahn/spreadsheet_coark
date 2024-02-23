import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const options = {
        title: 'Select Image',
        mediaType: 'photo' as MediaType,
        selectionLimit: 1,
        includeBase64: false,
    }

    const selectImage = async () => {
        const images = await launchImageLibrary(options);
        const formData = new FormData();

        console.log("images is ", images.assets[0])
        const response = await fetch(images.assets[0].uri);
        const fileBlob = await response.blob();
        console.log("fileBlob is ", fileBlob);
        
        formData.append('file', fileBlob, images.assets[0].fileName);

        let res = await fetch(
            'http://localhost:3000/api/uploadImage',
            {
                method: 'post',
                body: formData,
            }
        );
        let responseJson = await res.json();
        console.log("Image responseJson is ", responseJson);
        setSelectedImage(responseJson.imageUrl);
    };
  
    return (
      <View style={styles.container}>
        <Pressable onPress={selectImage}>
          {selectedImage === null && <Text>Select Image</Text>}
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
