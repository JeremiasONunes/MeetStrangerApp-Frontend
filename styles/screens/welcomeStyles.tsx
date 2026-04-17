// Importa utilitário de estilos
import { StyleSheet } from 'react-native';

// Importa cores do sistema
import { Colors } from '../../constants/colors';

// Importa tokens de espaçamento
import { Spacing } from '../../design-system/tokens/spacing';

// Importa tipografia padronizada
import { TextStyles } from '../../design-system/tokens/typography';

// Cria e exporta os estilos da tela de boas-vindas
export const welcomeStyles = StyleSheet.create({

  // Container principal da tela
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: Colors.background, // Cor de fundo padrão
    paddingHorizontal: Spacing.xl, //  padding lateral
    justifyContent: 'space-between', // Distribui conteúdo (topo e base)
  },

  // Área central (conteúdo principal)
  content: {
    flex: 1, // Ocupa o espaço disponível
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    paddingHorizontal: Spacing.sm, //  pequeno respiro lateral
  },

  // Logo do app
  logo: {
    width: 240,  // Tamanho fixo 
    height: 240, // Mantém proporção
    marginBottom: Spacing.xl, //  espaço abaixo
  },

  // Título principal
  title: {
    ...TextStyles.h2,          // Tipografia de destaque 
    fontWeight: 'bold',        // Ênfase
    color: Colors.primary,     // Cor principal (branding)
    marginBottom: Spacing.md,  // espaço abaixo
    textAlign: 'center',       // Centraliza texto
    letterSpacing: -0.2,       // Ajuste fino
    lineHeight: 28,            
  },

  // Subtítulo
  subtitle: {
    ...TextStyles.body,        // Texto padrão
    color: Colors.primary,     // Cor principal
    textAlign: 'center',       // Centraliza
    marginBottom: Spacing.lg,  // espaço abaixo
    lineHeight: 20,            
  },

  // Descrição adicional
  description: {
    ...TextStyles.small,       // Texto menor
    color: Colors.textSecondary, // Cor secundária
    textAlign: 'center',       // Centraliza
    lineHeight: 18,            
    paddingHorizontal: Spacing.md, // respiro lateral
  },

  // Container dos botões
  buttons: {
    paddingBottom: Spacing['4xl'], // espaço inferior (safe area)
    paddingHorizontal: Spacing.xs, // ajuste lateral
  },

  // Estilo individual de botão
  button: {
    marginBottom: Spacing.sm, // espaço entre botões
  },
});