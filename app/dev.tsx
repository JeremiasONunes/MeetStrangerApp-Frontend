import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

interface NavItem {
  label: string;
  route: string;
  description: string;
  color: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: '🏠 Welcome',
    route: '/',
    description: 'Tela inicial de boas-vindas',
    color: '#6B7280',
  },
  {
    label: '🔑 Login',
    route: '/auth/login',
    description: 'Tela de login com email e senha',
    color: '#3B82F6',
  },
  {
    label: '📝 Cadastro',
    route: '/auth/register',
    description: 'Tela de criação de conta',
    color: '#3B82F6',
  },
  {
    label: '🏡 Home',
    route: '/home',
    description: 'Tela principal após login',
    color: '#10B981',
  },
  {
    label: '🗂️ Selecionar Tópico',
    route: '/chat/select',
    description: 'Escolha de categoria de chat',
    color: '#10B981',
  },
  {
    label: '🎬 Chat Room — Filmes',
    route: '/chat/room?category=filmes',
    description: 'Sala de chat sobre filmes',
    color: '#F59E0B',
  },
  {
    label: '🎮 Chat Room — Jogos',
    route: '/chat/room?category=jogos',
    description: 'Sala de chat sobre jogos',
    color: '#F59E0B',
  },
  {
    label: '📺 Chat Room — Séries',
    route: '/chat/room?category=series',
    description: 'Sala de chat sobre séries',
    color: '#F59E0B',
  },
  {
    label: 'ℹ️ Sobre o App',
    route: '/about',
    description: 'Informações sobre o MeetStranger',
    color: '#8B5CF6',
  },
];

export default function DevNavigation() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.badge}>⚙️ DEV MODE</Text>
        <Text style={styles.title}>Navegação de Telas</Text>
        <Text style={styles.subtitle}>
          Acesse qualquer tela diretamente sem autenticação
        </Text>
      </View>

      <View style={styles.list}>
        {NAV_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.route}
            style={[styles.card, { borderLeftColor: item.color }]}
            onPress={() => router.push(item.route as any)}
            activeOpacity={0.75}
          >
            <Text style={styles.cardLabel}>{item.label}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <Text style={[styles.cardRoute, { color: item.color }]}>{item.route}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Para desativar, altere{' '}
          <Text style={styles.footerCode}>DEV_MODE = false</Text>
          {' '}em{' '}
          <Text style={styles.footerCode}>services/config.ts</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginTop: 50,
    marginBottom: 24,
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#F59E0B',
    color: '#000',
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
    marginBottom: 12,
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
  },
  list: {
    gap: 10,
  },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 10,
    padding: 16,
    borderLeftWidth: 4,
  },
  cardLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#F1F5F9',
    marginBottom: 3,
  },
  cardDescription: {
    fontSize: 12,
    color: '#94A3B8',
    marginBottom: 6,
  },
  cardRoute: {
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: '500',
  },
  footer: {
    marginTop: 28,
    padding: 14,
    backgroundColor: '#1E293B',
    borderRadius: 8,
  },
  footerText: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 18,
  },
  footerCode: {
    color: '#F59E0B',
    fontFamily: 'monospace',
  },
});
