import React, { useState } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { registerStyles as styles } from '../../styles/screens/registerStyles';

export default function Register() {
  const router = useRouter();
  const { register } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setLoading(true);
    try {
      const success = await register(username, email, password);
      if (success) {
        router.replace('/home');
      } else {
        Alert.alert('Erro', 'Falha ao criar conta');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao criar conta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'android' ? -85 : 0}
    >
      <View style={styles.content}>
        <Image 
          source={require('../../assets/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Criar Conta</Text>
        <Text style={styles.subtitle}>Junte-se ao MeetStranger</Text>

        <View style={styles.inputContainer}>
          <Input
            label="Nome de usuário"
            value={username}
            onChangeText={setUsername}
            placeholder="Seu nome de usuário"
          />

          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="seu@email.com"
          />

          <Input
            label="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Mínimo 6 caracteres"
          />

          <Input
            label="Confirmar senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholder="Confirme sua senha"
          />
        </View>

        <Button
          title={loading ? "Criando..." : "Criar Conta"}
          onPress={handleRegister}
          disabled={loading}
          style={styles.registerButton}
        />

        <Button
          title="Já tenho uma conta"
          onPress={() => router.push('/auth/login')}
          variant="outline"
        />
      </View>
    </KeyboardAvoidingView>
  );
}
