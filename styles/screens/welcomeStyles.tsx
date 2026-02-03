import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  logo: {
    width: 240,
    height: 240,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: -0.2,
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  description: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 12,
  },
  buttons: {
    paddingBottom: 60,
    paddingHorizontal: 4,
  },
  button: {
    marginBottom: 12,
  },
});