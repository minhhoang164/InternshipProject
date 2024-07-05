import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const ReportDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="green" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Báo cáo chi tiết</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'green',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
    },
});

export default ReportDetailsScreen;
