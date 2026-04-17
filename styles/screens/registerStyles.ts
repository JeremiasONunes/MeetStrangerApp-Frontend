// Importa utilitário de estilos
import { StyleSheet } from 'react-native';

// Importa cores do sistema
import { Colors } from '../../constants/colors';

// Importa tokens de espaçamento e sombras
import { Shadows, Spacing } from '../../design-system/tokens/spacing';

// Importa tipografia padronizada
import { TextStyles } from '../../design-system/tokens/typography';

// Cria e exporta os estilos da tela de Registro
export const registerStyles = StyleSheet.create({

  // Container principal da tela
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: Colors.background, // Cor padrão do app
  },

  // Área central de conteúdo
  content: {
    flex: 1, // Ocupa espaço disponível
    paddingHorizontal: Spacing.xl, // antes: 20 → padding lateral
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    marginBottom: Spacing['4xl'], // antes: 60 → espaço inferior (safe area)
  },

  // Logo do app
  logo: {
    width: 120,  // Tamanho fixo (mantido)
    height: 120, // Mantém proporção
    marginBottom: Spacing.md, // antes: 16 → espaço abaixo
    ...Shadows.xl, // antes: shadow manual → padronizado
    shadowColor: Colors.primaryDark // substitui '#1E3A8A' por token coerente
  },

  // Container dos inputs
  inputContainer: {
    width: '100%', // Ocupa toda largura disponível
  },

  // Título principal
  title: {
    ...TextStyles.title, // Tipografia base
    fontWeight: 'bold', // Destaque
    color: Colors.primary, // Cor principal
    marginBottom: Spacing.sm, // espaço abaixo
    letterSpacing: -0.2, // Ajuste fino
    lineHeight: 26, // Mantido para não quebrar layout
    textAlign: 'center', // Centraliza texto
  },

  // Subtítulo
  subtitle: {
    ...TextStyles.body, // Texto padrão
    color: Colors.textSecondary, // Cor secundária
    marginBottom: Spacing['4xl'], //  espaçamento maior
    lineHeight: 22, // Mantido
    textAlign: 'center', // Centraliza
  },

  // Botão de registro
  registerButton: {
    marginBottom: Spacing.sm, // espaço abaixo
    marginTop: Spacing.xl, // espaço acima
  },
});