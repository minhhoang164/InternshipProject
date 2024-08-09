import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

function UploadDate({ navigation }) {
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

    const submitReport = async () => {
        if (selectedImage) {
            const fileName = selectedImage.split('/').pop(); // Lấy tên file từ đường dẫn
            try {
                await axios.post('http://localhost:3000/upload', { imageLink: fileName });
                alert('Báo cáo đã được nộp thành công!');
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            alert('Vui lòng chọn ảnh trước khi nộp báo cáo.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../images/back.png')} style={styles.icon}></Image>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Chọn tập tin</Text>
                <TouchableOpacity onPress={() => setSelectedImage(null)}>
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
            <TouchableOpacity style={styles.submitButton} onPress={submitReport}>
                <Text style={styles.submitButtonText}>Nộp báo cáo</Text>
            </TouchableOpacity>
        </View>
    );
}

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
    submitButton: {
        width: '80%',
        padding: 15,
        backgroundColor: '#007BFF',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

export default UploadDate;
