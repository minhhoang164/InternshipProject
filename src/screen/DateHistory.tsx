import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../theme/theme';

const reports = [
    { id: '1', title: 'Báo cáo 1', date: '2024-07-20', content: 'Báo cáo 1' },
    { id: '2', title: 'Báo cáo 2', date: '2024-07-19', content: 'Chào nhé' },
    { id: '3', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
    { id: '4', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
    { id: '5', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
    { id: '6', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
    { id: '7', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
    { id: '8', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
    { id: '9', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
    { id: '10', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
    { id: '11', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
    { id: '12', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
    { id: '13', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
    { id: '14', title: 'Báo cáo 3', date: '2024-07-18' , content: 'Chào nhé' },
];

function DateHistory({ navigation }) {

    const handlePressToDetail = (report) => {
        // Điều hướng đến chi tiết báo cáo hoặc bất kỳ hành động nào khác
        navigation.navigate('DateHistoryDetail', { report: report });
    };

    const goBack = () => {
        navigation.goBack();
    };
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handlePressToDetail(item)}>
            <View style={styles.itemContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.innerHeader}>
                    <TouchableOpacity onPress={goBack}>
                        <Image source={require('../images/back.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.textInHeader}>Lịch sử báo cáo</Text>
                </View>
            </View>
            <FlatList
                data={reports}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryWhiteHex,
    },
    header: {
        //flex: 3,
        marginBottom: 10
    },
    innerHeader: {
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        margin: 10,
      },
    textInHeader: {
        color: COLORS.primaryWhiteHex,
        fontSize: 24,
    },
    itemContainer: {
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        margin: 10,
        borderWidth: 1
    },
    itemContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.primaryBlackHex,
    },
    date: {
        fontSize: 14,
        color: COLORS.primaryDarkGreyHex,
    },
});

export default DateHistory;
