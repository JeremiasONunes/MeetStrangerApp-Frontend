import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';
import { welcomeStyles as styles } from '../styles/screens/welcomeStyles';

export default function Welcome() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/home');
    }
  }, [isAuthenticated]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MeetStranger</Text>
        <Text style={styles.subtitle}>Converse anonimamente com desconhecidos</Text>
        <Text style={styles.description}>
          Conecte-se com pessoas do mundo todo de forma segura e anônima.
          Escolha um tópico e comece a conversar!
        </Text>
      </View>
      
      <View style={styles.buttons}>
        <Button
          title="Entrar"
          onPress={() => router.push('/auth/login')}
          style={styles.button}
        />
        <Button
          title="Criar Conta"
          onPress={() => router.push('/auth/register')}
          variant="outline"
          style={styles.button}
        />
      </View>
    </View>
  );
}