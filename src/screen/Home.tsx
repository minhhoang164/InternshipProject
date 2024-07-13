import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../theme/theme';

function Home({navigation}): React.JSX.Element {
    const handleToRecetionReport = () => {
        navigation.navigate('Report')
    }
    const handleToDateReport = () => {
        navigation.navigate('DateReport')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity>
                        <Image source={require('../images/logout.png')} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/user.png')} style={styles.icon}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleToDateReport}>
                    <View style={styles.button}>
                        <Text style={styles.textInButton}>BÁO CÁO MỦ NGÀY</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.textInButton}>BÁO CÁO TIẾP NHẬN MỦ</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    footer: {
        flex: 7
    },
    button: {
        width: '80%',
        height: 100,
        backgroundColor: COLORS.primaryLightGreyHex,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInHeader: {
        color: COLORS.primaryWhiteHex,
        fontSize: 24
    }
});

export default Home;