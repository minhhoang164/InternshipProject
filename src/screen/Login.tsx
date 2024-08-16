import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';

function Login({ navigation }): React.JSX.Element {
    const screenWidth = Dimensions.get('window').width;
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [hidePass, setHidePass] = useState(true);

    const onPressHide = () => {
        setHidePass(!hidePass);
    }

    const LoginHandlerToManage = async () => {
        // try {
        //     const response = await fetch('http://192.168.1.212:3000/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             username: username,
        //             password: password,
        //         }),
        //     });
        
        //     if (response.status === 200) {
        //         const result = await response.json();
        //         console.log(result);  // Log kết quả để kiểm tra
    
        //         if (result.account && result.user) {
        //             navigation.navigate('Manage', {
        //                 account: result.account,
        //                 user: result.user
        //             });
        //         } else {
        //             Alert.alert('Login Failed', 'Account or user information not found');
        //         }
        //     } else {
        //         const errorResult = await response.json();
        //         Alert.alert('Login Failed', errorResult.message || 'Invalid email or password');
        //     }
        // } catch (error) {
        //     console.error('Login error:', error);
        //     Alert.alert('Login Error', 'There was an error logging in. Please try again.');
        // }
            navigation.navigate('Manage');
    };
    
    
    

    return (
        <ImageBackground style={styles.background}
            source={require('../images/background.jpg')} >
            <TouchableOpacity style={{ position: 'absolute', top: 10, left: screenWidth - 30 }}>
                <Image source={require('../images/reject.png')}
                    style={{ height: 20, width: 20 }} />
            </TouchableOpacity>

            <View style={styles.mainView}>
                <View style={styles.items}>
                    <Text style={[styles.fontWeightLight, { fontSize: 11, color: 'black', marginTop: 5 }]}>
                        Chào mừng bạn đến với</Text>
                    <Text style={[styles.fontWeight, { fontSize: 17, color: 'black', marginTop: 5, marginBottom: 20 }]}>
                        TÊN CÔNG TY</Text>
                    <View style={[styles.textBox]}>
                        <TextInput
                            placeholder='Username'
                            style={styles.textInput}
                            value={username}
                            onChangeText={(text) => setUserName(text)}
                        />
                    </View>
                    <View style={[styles.textBox]}>
                        <TextInput
                            secureTextEntry={hidePass}
                            placeholder='Password'
                            style={styles.textInput}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity style={{ padding: 8 }} onPress={onPressHide}>
                            <Image source={require('../images/visible.png')}
                                style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                        <Text style={[styles.fontWeightLight, { fontSize: 11, color: 'gray', marginTop: 5 }]}>
                            Forgot your password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button]} onPress={LoginHandlerToManage}>
                        <Text style={[styles.fontWeight, { fontSize: 14, color: 'white' }]}>
                            Login</Text>
                    </TouchableOpacity>
                    <View style={styles.component1}>
                        <Text style={[styles.fontWeightLight, { fontSize: 13, color: 'gray' }]}>
                            Don't have an account? </Text>
                        <TouchableOpacity>
                            <Text style={[styles.fontWeight, { fontSize: 13, color: 'black' }]}>
                                Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    mainView: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    items: {
        margin: 30,
        alignItems: 'center',
    },
    fontWeightLight: {
        fontFamily: 'Roboto-Light',
    },
    fontWeight: {
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5F374B',
        borderRadius: 8,
        width: '100%',
        height: 40,
    },
    component1: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textBox: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'gainsboro',
        borderRadius: 8,
        borderWidth: 1,
        height: 40,
        width: '100%',
    },
    textInput: {
        fontSize: 13,
        marginLeft: 10,
        width: '80%'
    },
});

export default Login;
