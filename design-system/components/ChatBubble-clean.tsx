import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../tokens/colors';
import { Spacing, BorderRadius } from '../tokens/spacing';
import { TextStyles } from '../tokens/typography';

export type ChatBubblePosition = 'left' | 'right';

interface ChatBubbleProps {
  message: string;
  position: ChatBubblePosition;
  timestamp?: string;
  username?: string;
  showUsername?: boolean;
}

export function ChatBubble({
  message,
  position,
  timestamp,
  username,
  showUsername = false,
}: ChatBubbleProps) {
  const isUser = position === 'right';

  return (
    <View
      style={[
        styles.container,
        isUser ? styles.userContainer : styles.otherContainer,
      ]}
    >
      {showUsername && username && !isUser && (
        <Text style={styles.username}>{username}</Text>
      )}
      
      <View
        style={[
          styles.bubble,
          isUser ? styles.userBubble : styles.otherBubble,
        ]}
      >
        <Text
          style={[
            styles.message,
            isUser ? styles.userMessage : styles.otherMessage,
          ]}
        >
          {message}
        </Text>
        
        {timestamp && (
          <Text style={styles.timestamp}>
            {timestamp}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.xs,
    paddingHorizontal: Spacing.lg,
  },
  
  userContainer: {
    alignItems: 'flex-end',
  },
  otherContainer: {
    alignItems: 'flex-start',
  },
  
  bubble: {
    maxWidth: '80%',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
  },
  
  userBubble: {
    backgroundColor: Colors.chat.userBubble,
    borderBottomRightRadius: Spacing.sm,
  },
  otherBubble: {
    backgroundColor: Colors.chat.otherBubble,
    borderBottomLeftRadius: Spacing.sm,
  },
  
  username: {
    ...TextStyles.small,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
    marginLeft: Spacing.md,
  },
  
  message: {
    ...TextStyles.body,
  },
  userMessage: {
    color: Colors.chat.userText,
  },
  otherMessage: {
    color: Colors.chat.otherText,
  },
  
  timestamp: {
    ...TextStyles.small,
    marginTop: Spacing.xs,
    color: Colors.textTertiary,
    opacity: 0.7,
  },
});