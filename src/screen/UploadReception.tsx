import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

function UploadReception({ navigation }): React.JSX.Element {
    const [selectedImage, setSelectedImage] = useState(null);

    const selectImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                setSelectedImage(response.assets[0].uri);
            }
        });
    };

    const resetImage = () => {
        setSelectedImage(null);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../images/back.png')} style={styles.icon}></Image>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Chọn tập tin</Text>
                <TouchableOpacity onPress={resetImage}>
                    <Text style={styles.exitText}>Thoát</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                {selectedImage ? (
                    <Image source={{ uri: selectedImage }} style={styles.image} />
                ) : (
                    <TouchableOpacity style={styles.uploadButton} onPress={selectImage}>
                        <Text style={styles.uploadButtonText}>Chọn tập tin</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 15,
    },
    backText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    exitText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadButton: {
        width: '80%',
        padding: 15,
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        alignItems: 'center',
    },
    uploadButtonText: {
        color: '#007BFF',
        fontSize: 18,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
    },
});

export default UploadReception;
