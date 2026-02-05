import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { chatSelectStyles as styles } from '../../styles/screens/chatSelectStyles';

interface ChatCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const categories: ChatCategory[] = [
  {
    id: 'filmes',
    name: 'Filmes',
    description: 'Converse sobre seus filmes favoritos',
    icon: '🎬'
  },
  {
    id: 'jogos',
    name: 'Jogos',
    description: 'Discuta sobre games e gaming',
    icon: '🎮'
  },
  {
    id: 'series',
    name: 'Séries',
    description: 'Fale sobre suas séries preferidas',
    icon: '📺'
  }
];

export default function ChatSelect() {
  const router = useRouter();

  const handleCategorySelect = (categoryId: string) => {
    router.push(`/chat/room?category=${categoryId}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Escolha um Tópico</Text>
        <Text style={styles.subtitle}>
          Selecione o assunto que mais te interessa para conversar
        </Text>
      </View>

      <View style={styles.categories}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() => handleCategorySelect(category.id)}
            activeOpacity={0.8}
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.categoryDescription}>{category.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="← Voltar"
          onPress={() => router.back()}
          variant="primary"
        />
      </View>
    </View>
  );
}
