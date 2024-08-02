import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { COLORS } from '../theme/theme';

function ReceptionHistoryDetail({ route, navigation }) {
    const { report } = route.params;
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{report.title}</Text>
            <Text style={styles.date}>{report.date}</Text>
            <Text style={styles.content}>Nội dung báo cáo: {report.content}</Text>
            <Button title="Trở lại" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryWhiteHex,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.primaryBlackHex,
    },
    date: {
        fontSize: 16,
        color: COLORS.primaryDarkGreyHex,
        marginVertical: 10,
    },
    content: {
        fontSize: 14,
        color: COLORS.primaryDarkGreyHex,
        marginTop: 10,
    },
});

export default ReceptionHistoryDetail;
