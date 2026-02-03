import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
    letterSpacing: -0.2,
    lineHeight: 26,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 40,
    lineHeight: 22,
    textAlign: 'center',
  },
  registerButton: {
    marginBottom: 12,
    marginTop: 24,
  },
});