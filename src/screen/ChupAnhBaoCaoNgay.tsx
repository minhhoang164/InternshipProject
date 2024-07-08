import React, { useState } from 'react';
import { View, Button, StyleSheet, Image, StatusBar } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

function ChupAnhBaoCaoNgay() {
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
      <View style={styles.oval}>
        {photo && <Image source={{ uri: photo }} style={styles.image} />}
      </View>
      <Button title="Chụp hình" onPress={takePhoto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
});
export default ChupAnhBaoCaoNgay;