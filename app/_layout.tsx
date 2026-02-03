import { Stack } from 'expo-router';
import { AuthProvider } from '../hooks/useAuth';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/register" />
        <Stack.Screen name="home/index" />
        <Stack.Screen name="chat/select" />
        <Stack.Screen name="chat/room" />
        <Stack.Screen name="about/index" />
      </Stack>
    </AuthProvider>
  );
}