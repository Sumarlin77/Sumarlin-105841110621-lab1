
import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonComponent from '../button/button'
import Inputan from '../TextInput/input'

const ForgotPassword = ({navigation}) => {
    return (
        <View style = {{
            flex: 1,
            backgroundColor: '#EEEEEE',
            paddingHorizontal: 30,
            paddingTop: 100
        }}>
            <TouchableOpacity style = {{
                position: 'absolute',
                top: 60,
                left: 20
            }}>
                </TouchableOpacity>
                <View style = {{
                    marginBottom: 100,
                    marginTop: 10
                }}>
                <Text style = {{
                    fontWeight: 'bold',
                    fontSize: 40
                }}>
                    Forgot Password
                </Text>
            </View>
                <View style = {{
                    marginBottom: 42
            }}>
                <Text style = {{
                    fontSize: 16,
                    marginBottom: 10
                }}>
                    Please, enter your email address. You will receive a link to create a new password via email.
                </Text>
                <Inputan name = "Email" color = "black" />
                <Text style = {{
                    fontSize: 12,
                    paddingHorizontal: 20,
                    color: 'red',
                    marginTop: 5
                }}>
                    Not a valid email address. Should be your@email.com
                 </Text>
            </View>
        <ButtonComponent title = "SEND" color = "red" />
    </View>
    )
}

export default ForgotPassword
