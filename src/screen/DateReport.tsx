import React, { useState } from 'react';
import { Image, Modal, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../theme/theme';

function DateReport({navigation}): React.JSX.Element {
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalToggle = () => {
        setModalVisible(!modalVisible);
    };
    const handlePressToTakeAPhoto = () => {
        navigation.navigate('ChupAnhBaoCaoNgay');
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <StatusBar barStyle="light-content" backgroundColor="green" />
                <View style={styles.innerHeader}>
                    <TouchableOpacity>
                        <Image source={require('../images/back.png')} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textInHeader}>Sản Lượng Giao Nhận Mủ Ngày</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleModalToggle}>
                    <View style={styles.button}>
                        <Text style={styles.textInButton}>BÁO CÁO</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.textInButton}>XEM LỊCH SỬ BÁO CÁO</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={handleModalToggle}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalButton} onPress={handlePressToTakeAPhoto}>
                            <Text style={styles.modalButtonText}>Chụp hình báo cáo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => { /* Logic for selecting report image */ }}>
                            <Text style={styles.modalButtonText}>Chọn hình ảnh báo cáo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => { /* Logic for entering report data */ }}>
                            <Text style={styles.modalButtonText}>Nhập liệu báo cáo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={handleModalToggle}>
                            <Text style={styles.modalButtonText}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryWhiteHex,
    },
    header: {
        flex: 3,
    },
    innerHeader: {
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    footer: {
        flex: 7
    },
    button: {
        width: '70%',
        height: 100,
        backgroundColor: 'green',
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInButton: {
        fontSize: 20,
        color: COLORS.primaryWhiteHex,
        fontWeight: 'bold'
    },
    buttonContainer: {
        margin: 10,
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'stretch',
        margin: 10,
    },
    headerContainer: {
        backgroundColor: COLORS.primaryLightGreyHex,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textInHeader: {
        color: COLORS.primaryWhiteHex,
        fontSize: 24
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '100%',
        backgroundColor: COLORS.primaryWhiteHex,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    modalButton: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderBottomColor: COLORS.primaryLightGreyHex,
        alignItems: 'center',
        margin: 1,
    },
    modalButtonText: {
        fontSize: 18,
        color: COLORS.primaryBlackHex,
    },
});

export default DateReport;