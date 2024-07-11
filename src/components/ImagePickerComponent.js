import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerComponent = ({ image, onChangeImage }) => {
    const handlePress = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status === 'granted') {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                onChangeImage(result.assets[0].uri);
            }
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            {image ? (
                <Image source={{ uri: image }} style={styles.image} />
            ) : (
                <View style={styles.iconContainer}>
                    <Ionicons name="camera" size={30} color="black" />
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,  
        height: 100, 
        backgroundColor: '#fff', 
        borderRadius: 10,
        borderWidth: 2,  
        borderColor: '#007BFF',  
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,  
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});

export default ImagePickerComponent;
