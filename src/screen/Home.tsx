
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme/theme';

function Home(): React.JSX.Element {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.inner}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}></View>
                        <Text style={styles.textInButton}>BÁO CÁO MỦ NGÀY</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}></View>
                        <Text style={styles.textInButton}>BÁO CÁO TIẾP NHẬN MỦ</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryWhiteHex
    },
    inner: {
        justifyContent: 'center'
    },
    button: {
        width: '70%',
        height: 200,
        backgroundColor: COLORS.primaryLightGreyHex,
        borderRadius: 20,
        borderWidth: 1
    },
    textInButton: {
        fontSize: 20,
        color: COLORS.primaryBlackHex,
        fontWeight: 'bold'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;
