import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

import { ChatMessage } from '../../components/ChatMessage';
import { useChat } from '../../hooks/useChat';
import { Colors } from '../../constants/colors';
import { chatRoomStyles as styles } from '../../styles/screens/chatRoomStyles';

const categories = [
  { id: 'filmes', name: 'Filmes', icon: '🎬' },
  { id: 'jogos', name: 'Jogos', icon: '🎮' },
  { id: 'series', name: 'Séries', icon: '📺' }
];

export default function ChatRoom() {
  const router = useRouter();
  const { category } = useLocalSearchParams<{ category: string }>();

  const [messageText, setMessageText] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const { messages, isConnected, isMatching, partnerName, sendMessage, findNewPartner } =
    useChat(category || 'filmes');

  const categoryInfo = categories.find(
    cat => cat.id === category
  );

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 50);
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    sendMessage(messageText.trim());
    setMessageText('');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'android' ? -85 : 0}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>← Sair</Text>
        </TouchableOpacity>
        
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>
            {categoryInfo?.icon} {categoryInfo?.name}
          </Text>
          <Text style={styles.connectionStatus}>
            {isConnected 
              ? `🟢 Conversando com ${partnerName}` 
              : isMatching 
                ? '🟡 Procurando nova pessoa...' 
                : '🟡 Procurando pessoa...'
            }
          </Text>
        </View>
        
        <TouchableOpacity onPress={findNewPartner} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Próximo</Text>
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatMessage message={item} />}
        style={styles.messagesList}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Digite sua mensagem..."
          placeholderTextColor={Colors.textSecondary}
          multiline
          maxLength={500}
        />
        <TouchableOpacity
          style={[
            styles.sendButton,
            !messageText.trim() && styles.sendButtonDisabled
          ]}
          onPress={handleSendMessage}
          disabled={!messageText.trim()}
        >
          <Text style={styles.sendButtonText}>➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
