import { Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import SignUp from './component/pages/signUp'; // Impor jalur yang benar

const App = () => {
  const [formLogin, setForm] = useState({
    email: '',
    password: ''
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Form Login</Text>
      <View>
        <Text>Email</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(hasil) => setForm({ ...formLogin, email: hasil })}
          value={formLogin.email}
        />
        <Text>Password</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => setForm({ ...formLogin, password: text })}
          value={formLogin.password}
          secureTextEntry
        />
        <View style={{ marginTop: 10 }}>
          <Button title="Login" onPress={() => alert(`Email: ${formLogin.email}\nPassword: ${formLogin.password}`)} />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>Email: {formLogin.email}</Text>
          <Text>Password: {formLogin.password}</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
