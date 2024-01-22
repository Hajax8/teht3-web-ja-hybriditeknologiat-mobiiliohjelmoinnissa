import { Appbar, Button, TextInput } from "react-native-paper";
import React, { useState } from 'react'
import MainAppbar from "./components/MainAppbar";
import { StyleSheet, View } from "react-native";

export default function Login() {
    const [formData, setFormData] = useState({username: '', password: ''})
    const [ShowError, setShowError] = useState(false)


    const validateAndSubmit = () => {
        setShowError(true)
        if (formData.username.length > 0 && formData.password.lengh > 8) {
            setFormData({username: '', password: ''})
            setShowError(false)
        }
    }


    return (
        <>
        <MainAppbar title = 'Login'/>
        <View style= {StyleSheet.container}>
            <TextInput 
            label="username"
             style= {styles.input_field}
             value = {formData.username}
             onChangeText={formData.username.length===0 && ShowError}
             />
            <TextInput 
            label="password" style= {styles.input_field} 
            keyboardType='visible-password'
            value={formData.password}
            onChangeText={text => setFormData({...formData,password: text})}
            error = {formData.password.length < 8 && ShowError}
            />
            <Button mode="contained" style={styles.button} onPress={validateAndSubmit}> Login </Button>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4b4b4b',
        justifyContent: 'center',
    },
    input_fiel: {
        backgroundColor: '#fcfcfc',
        margin: (16,8,16,8),
    },
    button: {
        margin: (16,8,0,8),
    },
})