import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateInput = ({navigation}) => {
    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false);
    const [isEnabled, setIsEnabled] = React.useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };
    const goBack = () => {
        navigation.goBack()
    }
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
                <TouchableOpacity style={styles.backButton} onPress={goBack}>
                    <Text style={[styles.buttonText, { fontSize: 25 }]}>⇦</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Tạo báo cáo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Gửi BC</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.name}>NGUYỄN VĂN A</Text>
            
            <ScrollView contentContainerStyle={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Khu cạo (mủ nước):</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Ngày cạo:</Text>
                    <TouchableOpacity onPress={() => setShow(true)}>
                        <Text style={styles.input}>{date.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Điểm danh:</Text>
                    <Switch
                        trackColor={{ false: "#gray", true: "lightgreen" }}
                        thumbColor={isEnabled ? "green" : "white"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsEnabled(previousState => !previousState)}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Kiểm tra dụng cụ cá nhân:</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>MỦ NƯỚC</Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Tên lô:</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>NH3 (lit):</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.blueLabel}>Lần 1:</Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Kem:</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Khối:</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Tờ:</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.blueLabel}>Lần 2:</Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Khối:</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Tờ:</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Mủ đánh đông:</Text>
                        <TextInput style={styles.input} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>MỦ PHỤ</Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Tên lô:</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Đông (kg):</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Chén (kg):</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Dây (kg):</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Tận thu (kg):</Text>
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
        width: 200,
        fontSize: 16,
        fontWeight: 'bold',
    },
    blueLabel: {
        width: 200,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    name: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
    },
    greenDot: {
        backgroundColor: 'green',
        width: 20,
        height: 20,
        borderRadius: 10,
    },
});

export default DateInput;
