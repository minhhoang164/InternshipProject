import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const newsData = [
  {
    id: '1',
    source: 'VnExpress',
    title: 'Israel lần đầu không kích Hezbollah sau lệnh ngừng bắn',
    time: '48 phút trước',
    image: require('../images/isarel.jpg'),
    content: 'Israel triển khai chiến đấu cơ tập kích địa điểm được cho là kho chứa rocket tầm trung của Hezbollah ở miền nam Lebanon.\n\nĐây là lần đầu tiên Israel không kích vào miền nam Lebanon từ khi lệnh ngừng bắn với Hezbollah có hiệu lực ngày 27/11.\n\nQuân đội Lebanon, nhóm vũ trang Hezbollah, Lực lượng Lâm thời Liên Hợp Quốc tại Lebanon (UNIFIL) chưa bình luận về thông tin.'
  },
  {
    id: '2',
    source: 'VnExpress',
    title: 'Cảnh sát đu dây trên vách núi cao 200 m đưa thi thể dưới vực lên',
    time: '1 giờ trước',
    image: require('../images/canhsat.jpg'),
    content: 'Chiều 28/11, lực lượng cứu nạn đưa thi thể anh Nguyễn Văn Thành (31 tuổi, trú tại phường 9, TP Tuy Hòa, Phú Yên) lên bờ, bàn giao cho gia đình sau ba ngày nạn nhân rơi xuống vách núi hiểm trở ở Kỳ Co thuộc xã Nhơn Lý, TP Quy Nhơn.\n\nTheo phương án của Cảnh sát Phòng cháy chữa cháy và cứu nạn cứu hộ, Công an Bình Định, lực lượng cứu nạn đến địa điểm thuận tiện nhất. Sau đó thả dây thừng để một nhóm xuống vực sâu tiếp cận, bó thi thể nạn nhân và bám dây đưa lên. Đến vị trí có thể đi bộ, nhiều chiến sĩ dùng thanh đòn khiêng nạn nhân lên cao.'
  },
  {
    id: '3',
    source: 'Người lao động',
    title: 'Thủ tướng Phạm Minh Chính tiếp kiến Quốc vương Campuchia',
    time: '2 giờ trước',
    image: require('../images/pmc.jpg'),
    content: 'Nhiệt liệt chào mừng Quốc vương và Đoàn đại biểu cấp cao Vương quốc Campuchia, Thủ tướng đánh giá cao và cho rằng chuyến thăm thể hiện tình cảm quý mến sâu sắc của Quốc vương đối với lãnh đạo và nhân dân Việt Nam cũng như quan hệ hai nước.\n\nThủ tướng nhấn mạnh lịch sử quan hệ Việt Nam và Campuchia đã khắc ghi những tháng năm kháng chiến đầy gian khổ để giành lại độc lập, tự do của mỗi nước. Sự sẻ chia, hy sinh cho nhau là truyền thống tốt đẹp và là tài sản vô giá mà hai dân tộc cần cùng nhau gìn giữ và vun đắp. Nhân dân Việt Nam luôn ghi nhớ tình cảm và sự giúp đỡ quý báu của cố Thái Thượng Hoàng Norodom Sihanouk, của Quốc vương, các thế hệ lãnh đạo và nhân dân Campuchia đã dành cho nhân dân Việt Nam trong sự nghiệp giải phóng dân tộc, thống nhất đất nước trước đây cũng như công cuộc xây dựng và bảo vệ và phát triển đất nước ngày nay.'
  },
  {
    id: '4',
    source: 'Tuổi trẻ',
    title: 'Man City sa sút vì Pep Guardiola?',
    time: '2 giờ trước',
    image: require('../images/pep.jpg'),
    content: 'Rạng sáng 27-11 (giờ VN), Man City bị Feyenoord cầm hòa 3-3 một cách khó tin, trong trận đấu mà họ vẫn còn dẫn 3-0 đến tận phút 74. Đó chẳng khác gì một trận thua. Và nó kéo dài mạch trận không thắng trên mọi đấu trường của Man City lên đến con số 6.\n\nGuardiola chưa bao giờ trải qua hoàn cảnh như vậy trong sự nghiệp. Xuyên suốt 16 năm làm HLV, cựu tiền vệ của Barca luôn được biết đến như một vị thuyền trưởng thông thái, sáng suốt và đặc biệt tài giỏi về khả năng quản lý, kiểm soát đội bóng. Trong 15 mùa giải đã qua (Guardiola từng nghỉ ngơi 1 năm), chỉ vỏn vẹn 3 mùa giải các đội bóng ông dẫn dắt (Barca, Bayern và Man City) là không thể vô địch quốc nội.\n\nVô địch Premier League (Giải ngoại hạng Anh) cũng như chiếm ngôi đầu bảng Champions League từng được xem là chuyện mặc nhiên của Man City. Nhưng đến mùa giải năm nay, tất cả đều bị đảo lộn. Tại Premier League, họ bị đối thủ bỏ xa 8 điểm. Còn tại Champions League, Man City đã rớt xuống nhóm giữa bảng xếp hạng.\n\nBão chấn thương là một phần nguyên do nhưng không thể là nguyên nhân chính bởi không đội bóng nào ở châu Âu không phải đối mặt với vấn nạn này. Ngay cả việc thiếu vắng Rodri cũng không đến mức quá nghiêm trọng. '
    
  },
  {
    id: '5',
    source: 'Tuổi trẻ',
    title: 'Man City sa sút vì Pep Guardiola?',
    time: '2 giờ trước',
    image: require('../images/pep.jpg'),
    content: 'Rạng sáng 27-11 (giờ VN), Man City bị Feyenoord cầm hòa 3-3 một cách khó tin, trong trận đấu mà họ vẫn còn dẫn 3-0 đến tận phút 74. Đó chẳng khác gì một trận thua. Và nó kéo dài mạch trận không thắng trên mọi đấu trường của Man City lên đến con số 6.\n\nGuardiola chưa bao giờ trải qua hoàn cảnh như vậy trong sự nghiệp. Xuyên suốt 16 năm làm HLV, cựu tiền vệ của Barca luôn được biết đến như một vị thuyền trưởng thông thái, sáng suốt và đặc biệt tài giỏi về khả năng quản lý, kiểm soát đội bóng. Trong 15 mùa giải đã qua (Guardiola từng nghỉ ngơi 1 năm), chỉ vỏn vẹn 3 mùa giải các đội bóng ông dẫn dắt (Barca, Bayern và Man City) là không thể vô địch quốc nội.\n\nVô địch Premier League (Giải ngoại hạng Anh) cũng như chiếm ngôi đầu bảng Champions League từng được xem là chuyện mặc nhiên của Man City. Nhưng đến mùa giải năm nay, tất cả đều bị đảo lộn. Tại Premier League, họ bị đối thủ bỏ xa 8 điểm. Còn tại Champions League, Man City đã rớt xuống nhóm giữa bảng xếp hạng.\n\nBão chấn thương là một phần nguyên do nhưng không thể là nguyên nhân chính bởi không đội bóng nào ở châu Âu không phải đối mặt với vấn nạn này. Ngay cả việc thiếu vắng Rodri cũng không đến mức quá nghiêm trọng. '
    
  },
];

const Home = () => {
  const navigation = useNavigation();

  const handlePress = (article) => {
    navigation.navigate('ArticleDetail', { article });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.source}>{item.source}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tin Mới Nhất</Text>
        <Image source={require('../images/setting.png')} style={styles.settingIcon}/>
      </View>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#202020',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    padding: 16,
  },
  settingIcon: {
    width: 30, // Đặt kích thước cho icon quay lại
    height: 30,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 24, // Tăng khoảng cách giữa các ô
    backgroundColor: '#1e1e1e',
    borderRadius: 12, // Bo góc ô bài báo
    overflow: 'hidden',
    padding: 16, // Thêm padding cho card
  },
  image: {
    width: 100, // Tăng kích thước hình ảnh
    height: 100, // Tăng kích thước hình ảnh
    borderRadius: 8, // Bo góc hình ảnh
  },
  textContainer: {
    flex: 1,
    paddingLeft: 16, // Thêm khoảng cách giữa hình ảnh và text
  },
  source: {
    color: '#ccc',
    fontSize: 14, // Tăng kích thước font của nguồn
  },
  title: {
    color: '#fff',
    fontSize: 16, // Tăng kích thước font của tiêu đề
    fontWeight: 'bold',
    marginVertical: 8, // Khoảng cách giữa tiêu đề và thời gian
  },
  time: {
    color: '#888',
    fontSize: 14, // Tăng kích thước font của thời gian
  },
});


export default Home;
