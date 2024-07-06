import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';

const ReceptionInput = () => {
    const renderSection = (title, fields) => (
        <View style={styles.section} key={title}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {fields.map((field, index) => (
                <View style={styles.inputGroup} key={index}>
                    <Text style={styles.label}>{field}:</Text>
                    <TextInput style={styles.input} />
                </View>
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="green" />
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={[styles.buttonText, { fontSize: 25 }]}>⇦</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Tạo báo cáo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Gửi báo cáo</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.formContainer}>
                {renderSection('Mủ đông', ['TL.tươi', 'DRC', 'Q-Khô', 'Loại 1', 'Loại 2', 'Loại 3'])}
                {renderSection('Mủ chén', ['TL.tươi', 'DRC', 'Q-Khô', 'Loại 1', 'Loại 2', 'Loại 3'])}
                {renderSection('Mủ dây', ['TL.tươi', 'DRC', 'Q-Khô'])}
                {renderSection('Mủ tận thu', ['TL.tươi', 'DRC', 'Q-Khô'])}
                {renderSection('Mủ đất', ['TL.tươi', 'DRC', 'Q-Khô'])}
                <View style={styles.section}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Tổng qui khô:</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nguồn gốc NL:</Text>
                        <TextInput style={styles.input} />
                    </View>
                </View>
            </ScrollView>
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
    backButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    formContainer: {
        padding: 20,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 10,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        width: 100,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});

export default ReceptionInput;
