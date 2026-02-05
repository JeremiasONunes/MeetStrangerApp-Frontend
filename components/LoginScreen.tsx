import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useAuth } from '../hooks/useAuth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, register } = useAuth();

  const handleSubmit = async () => {
    if (!email || !password || (!isLogin && !username)) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      let success;
      if (isLogin) {
        success = await login(email, password);
      } else {
        success = await register(username, email, password);
      }

      if (!success) {
        Alert.alert('Erro', isLogin ? 'Credenciais inválidas' : 'Erro ao criar conta');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro de conexão com o servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 30 }}>
        {isLogin ? 'Login' : 'Cadastro'}
      </Text>

      {!isLogin && (
        <TextInput
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
          style={{ borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 }}
        />
      )}

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 }}
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 }}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        disabled={loading}
        style={{
          backgroundColor: loading ? '#ccc' : '#007AFF',
          padding: 15,
          borderRadius: 5,
          marginBottom: 15
        }}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={{ textAlign: 'center', color: '#007AFF' }}>
          {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}