// Importa utilitário de estilos do React Native
import { StyleSheet } from 'react-native';

// Importa cores do sistema
import { Colors } from '../../constants/colors';

// Importa tokens de espaçamento e borda
import { BorderRadius, Spacing } from '../../design-system/tokens/spacing';

// Importa tipografia padronizada
import { TextStyles } from '../../design-system/tokens/typography';

// Cria e exporta os estilos da tela de seleção de chat
export const chatSelectStyles = StyleSheet.create({

  // Container principal da tela
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: Colors.background, // Cor de fundo padrão
    paddingHorizontal: Spacing.xl, // padding lateral da tela
  },

  // Cabeçalho (título + subtítulo)
  header: {
    paddingTop: Spacing['4xl'],   // espaço superior (status bar)
    paddingBottom: Spacing.xl,    // espaçamento inferior
    alignItems: 'center',         // Centraliza conteúdo horizontalmente
  },

  // Título principal
  title: {
    ...TextStyles.title,          // Tipografia de título
    fontWeight: 'bold',           // Mais destaque
    color: Colors.primary,    // Cor principal do texto
    marginBottom: Spacing.xs,     // espaço abaixo
    letterSpacing: -0.2,          // Ajuste fino de espaçamento entre letras
  },

  // Subtítulo explicativo
  subtitle: {
    ...TextStyles.body,           // Texto padrão
    color: Colors.textSecondary,  // Cor secundária (menos destaque)
    textAlign: 'center',          // Centraliza o texto
    lineHeight: 20,               // Mantido para controle visual fino
    paddingHorizontal: Spacing.sm,// margem interna lateral
  },

  // Lista de categorias
  categories: {
    flex: 1, // Ocupa o espaço restante
    gap: Spacing.sm, // espaçamento entre cards
  },

  // Card de categoria
  categoryCard: {
    backgroundColor: Colors.surface, // Fundo do card
    padding: Spacing.lg,             // espaçamento interno
    borderRadius: BorderRadius.lg,   // borda arredondada
    alignItems: 'center',            // Centraliza conteúdo
    borderWidth: 1,                  // Borda do card
    borderColor: Colors.border,      // Cor da borda
    marginBottom: Spacing.xs,        // espaço entre cards
  },

  // Ícone da categoria (emoji ou ícone)
  categoryIcon: {
    fontSize: 32,                   // Tamanho do ícone (mantido)
    marginBottom: Spacing.xs,       // espaço abaixo
  },

  // Nome da categoria
  categoryName: {
    ...TextStyles.body,             // Base tipográfica
    fontWeight: 'bold',             // Destaque
    color: Colors.primary,      // Cor principal
    marginBottom: Spacing.xs,       // espaço abaixo
    letterSpacing: -0.1,            // Ajuste fino visual
  },

  // Descrição da categoria
  categoryDescription: {
    ...TextStyles.small,            // Texto menor
    color: Colors.textSecondary,    // Cor secundária
    textAlign: 'center',            // Centralizado
    lineHeight: 16,                 // Controle de leitura
  },

  // Container do botão inferior
  buttonContainer: {
    paddingBottom: Spacing['4xl'],  // espaço inferior (safe area)
    paddingHorizontal: Spacing.xs,  // pequeno ajuste lateral
  },
});