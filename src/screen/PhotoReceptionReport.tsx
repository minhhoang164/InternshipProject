import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Button } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

function PhotoReceptionReport({ navigation }): React.JSX.Element {
  const [photo, setPhoto] = useState(null);

  const takePhoto = () => {
    launchCamera({ mediaType: 'photo', saveToPhotos: true }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPhoto(response.assets[0].uri);
      }
    });
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
        <View style={styles.oval}>
          {photo && <Image source={{ uri: photo }} style={styles.image} />}
        </View>
        <Button title="Chụp hình" onPress={takePhoto} />
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
  oval: {
    width: 200,
    height: 300,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 100,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
});

export default PhotoReceptionReport;
