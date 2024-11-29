import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';  // Đảm bảo import đúng
import { useNavigation } from '@react-navigation/native'; 

const ArticleDetail = ({ route }) => {
  const { article } = route.params;
  const navigation = useNavigation();

  const [isPlaying, setIsPlaying] = useState(false);

  // Hàm xử lý play/pause
  const handlePlayPause = () => {
    setIsPlaying(prevState => !prevState); // Đổi trạng thái play/pause
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          {/* Nút quay lại */}
          <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          >
            <Image source={require('../images/back.png')} style={styles.backIcon}/>
          </TouchableOpacity>
          <Text style={styles.headerText}>Chi tiết</Text>
        </View>

        <Image source={article.image}  style={styles.image} />
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.source}>{article.source}</Text>
        <Text style={styles.time}>{article.time}</Text>
        <Text style={styles.content}>{article.content}</Text>
      </ScrollView>

      {/* Nút play cố định ở góc trên phải */}
      <TouchableOpacity style={styles.floatingButton} onPress={handlePlayPause}>
        <Image 
            source= {isPlaying ? require('../images/pause.png') : require('../images/play.png')} style={styles.playIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  backIcon: {
    width: 30, // Đặt kích thước cho icon quay lại
    height: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#202020',
  },
  backButton: {
    padding: 8, // Giữ nút quay lại cách biệt một chút
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  source: {
    color: '#ccc',
    fontSize: 14,
  },
  time: {
    color: '#888',
    fontSize: 12,
    marginVertical: 4,
  },
  content: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 8,
    marginBottom: 40,
  },
  floatingButton: {
    position: 'absolute', // Đặt vị trí tuyệt đối
    top: 20, // Cách trên màn hình 20 đơn vị
    right: 20, // Cách bên phải màn hình 20 đơn vị
    width: 60, // Kích thước của nút
    height: 60, // Kích thước của nút
    justifyContent: 'center', // Canh giữa icon trong nút
    alignItems: 'center', // Canh giữa icon trong nút
  },
  playIcon: {
    width: 40, // Đặt kích thước cho biểu tượng play
    height: 40,
  },
});

export default ArticleDetail;
