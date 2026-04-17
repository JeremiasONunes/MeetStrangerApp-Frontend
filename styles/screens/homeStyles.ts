// Importa utilitário de criação de estilos
import { StyleSheet } from 'react-native';

// Importa cores do sistema
import { Colors } from '../../constants/colors';

// Importa tokens de espaçamento e borda
import { BorderRadius, Spacing } from '../../design-system/tokens/spacing';

// Importa tipografia padronizada
import { TextStyles } from '../../design-system/tokens/typography';

// Cria e exporta os estilos da tela Home
export const homeStyles = StyleSheet.create({

  // Container principal da tela
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: Colors.background, // Cor de fundo padrão
    paddingHorizontal: Spacing.xl, // antes: 20 → padding lateral consistente
  },

  // Cabeçalho da tela
  header: {
    paddingTop: Spacing['4xl'], // antes: 50 → espaço superior (status bar)
    paddingBottom: Spacing.xl,  // antes: 24 → espaçamento inferior
  },

  // Texto de boas-vindas
  welcome: {
    ...TextStyles.title,        // Base tipográfica de título
    fontWeight: 'bold',         // Destaque maior
    color: Colors.primary,  // Cor principal do texto
    marginBottom: Spacing.xs,   // antes: 6 → espaço abaixo
    letterSpacing: -0.1,        // Ajuste fino de leitura
    lineHeight: 24,             // Mantido para controle visual
  },

  // Subtítulo
  subtitle: {
    ...TextStyles.caption,      // Texto menor
    color: Colors.textSecondary,// Cor secundária
    lineHeight: 18,             // Ajuste de legibilidade
  },

  // Área principal de conteúdo
  content: {
    flex: 1, // Ocupa espaço restante
  },

  // Card principal
  card: {
    backgroundColor: Colors.surface, // Fundo do card
    padding: Spacing.xl,             // antes: 20 → padding interno
    borderRadius: BorderRadius.lg,   // antes: 12 → borda arredondada
    marginBottom: Spacing.xl,        // antes: 24 → espaço entre blocos
  },

  // Título do card
  cardTitle: {
    ...TextStyles.title,        // Tipografia de título
    fontWeight: 'bold',         // Destaque
    color: Colors.primary,  // Cor principal
    marginBottom: Spacing.sm,   // antes: 10 → espaço abaixo
    letterSpacing: -0.2,        // Ajuste fino
  },

  // Descrição do card
  cardDescription: {
    ...TextStyles.caption,      // Texto auxiliar
    color: Colors.textSecondary,// Cor secundária
    lineHeight: 20,             // Leitura confortável
  },

  // Lista de features (ícones)
  features: {
    flexDirection: 'row',            // Layout horizontal
    justifyContent: 'space-around',  // Distribui igualmente
    marginBottom: Spacing.xl,        // antes: 24 → espaço abaixo
  },

  // Item individual de feature
  feature: {
    alignItems: 'center', // Centraliza conteúdo
  },

  // Ícone da feature
  featureIcon: {
    fontSize: 28,                // Tamanho do ícone (mantido)
    marginBottom: Spacing.xs,    // antes: 6 → espaço abaixo
  },

  // Texto da feature
  featureText: {
    ...TextStyles.small,         // Texto pequeno
    color: Colors.primary,   // Cor principal
    fontWeight: '500',           // Destaque leve
  },

  // Container dos botões
  buttons: {
    paddingBottom: Spacing['4xl'], // antes: 60 → espaço inferior (safe area)
  },

  // Estilo individual de botão
  button: {
    marginBottom: Spacing.sm, // antes: 12 → espaço entre botões
  },
});