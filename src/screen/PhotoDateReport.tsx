import { Camera, CameraType } from 'expo-camera/legacy';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Button } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

function PhotoDateReport({ navigation }) {
  const [photo, setPhoto] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera ] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back)

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === false) {
    return <Text>No Camera Access</Text>;
  }

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri)
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../images/back.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chụp hình báo cáo</Text>
        <TouchableOpacity style={styles.exitButton} onPress={() => setPhoto(null)}>
          <Text style={styles.exitText}>Thoát</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.cameraContainer}>
          {photo ? (
            <Image source={{ uri: photo }} style={styles.image} />
          ) : (
            <Camera style={styles.camera} type={CameraType.back}>
              <View style={styles.cameraOverlay}>
                <Button title="Chụp hình" onPress={takePicture} />
              </View>
            </Camera>
          )}
        </View>
      </View>
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
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  exitButton: {
    padding: 10,
  },
  exitText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cameraContainer: {
    width: 200,
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  cameraOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
});

export default PhotoDateReport;
