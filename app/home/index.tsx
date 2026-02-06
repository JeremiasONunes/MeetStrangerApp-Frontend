import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/Button';
import { homeStyles as styles } from '../../styles/screens/homeStyles';

export default function Home() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleStartChat = () => {
    router.push('/chat/select');
  };

  const handleAbout = () => {
    router.push('/about');
  };

  const handleLogout = async () => {
    await logout();
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Olá, {user?.username}!</Text>
        <Text style={styles.subtitle}>Pronto para se conectar com novas pessoas?</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎭 MeetStranger</Text>
          <Text style={styles.cardDescription}>
            Converse com pessoas do mundo todo. 
            Escolha um tópico de interesse e comece uma conversa interessante!
          </Text>
        </View>

        <View style={styles.features}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🌍</Text>
            <Text style={styles.featureText}>Global</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>⚡</Text>
            <Text style={styles.featureText}>Instantâneo</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          title="Começar a Conversar"
          onPress={handleStartChat}
          style={styles.button}
        />
        <Button
          title="Sobre o App"
          onPress={handleAbout}
          variant="outline"
          style={styles.button}
        />
        <Button
          title="Sair"
          onPress={handleLogout}
          variant="secondary"
        />
      </View>
    </View>
  );
}
