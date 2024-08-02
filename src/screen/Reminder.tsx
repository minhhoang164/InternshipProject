import Icon from '@react-native-vector-icons/material-icons';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../theme/theme';

const reminders = [
    { id: '1', time: '6:00 PM', text: 'Nộp báo cáo' },
    { id: '2', time: '6:30 PM', text: 'Nộp báo cáo' },
];

const ReminderItem = ({ time, text }) => (
    <View style={styles.reminderItem}>
        <View>
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{time}</Text>
                <Text style={styles.periodText}>{time.includes('PM') ? 'PM' : 'AM'}</Text>
            </View>
            <Text style={styles.reminderText}>{text}</Text>
        </View>
        <TouchableOpacity>
            <Image source={require('../images/sub.png')} style={styles.icon} />
        </TouchableOpacity>
    </View>
);

const Reminder = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Nhắc Nhở</Text>
                <TouchableOpacity>
                    <Image source={require('../images/add.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={reminders}
                renderItem={({ item }) => <ReminderItem time={item.time} text={item.text} />}
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: COLORS.primaryBlackHex
    },
    reminderItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        justifyContent: 'space-between'
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 15,
    },
    timeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.primaryBlackHex
    },
    periodText: {
        fontSize: 16,
        marginLeft: 5,
        marginBottom: 3,
    },
    reminderText: {
        fontSize: 18,
        color: COLORS.primaryBlackHex
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
    },
});

export default Reminder;
