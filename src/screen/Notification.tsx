import Icon from '@react-native-vector-icons/material-icons';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../theme/theme';

const noti = [
    { id: '1', time: '22/7/2024 6:00 PM', text: 'Bạn vừa nộp báo cáo' },
    { id: '2', time: '22/7/2024 6:30 PM', text: 'Báo cáo bị hủy' },
];

const NotificationItem = ({ time, text }) => (
    <View style={styles.notiItem}>
        <View>
            <Text style={styles.notiText}>{text}</Text>
            <Text style={styles.timeText}>{time}</Text>

        </View>
        <TouchableOpacity>
            <Image source={require('../images/more.png')} style={styles.icon} />
        </TouchableOpacity>
    </View>
);

const Notification = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Thông Báo</Text>
                <Image source={require('../images/loupe.png')} style={styles.icon} />
            </View>
            <FlatList
                data={noti}
                renderItem={({ item }) => <NotificationItem time={item.time} text={item.text} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: COLORS.primaryBlackHex
    },
    notiItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        justifyContent: 'space-between'
    },
    timeText: {
        fontSize: 18,
        color: COLORS.primaryGreyHex
    },
    notiText: {
        fontSize: 22,
        color: COLORS.primaryBlackHex,
        fontWeight: '600'
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
    },
});

export default Notification;
