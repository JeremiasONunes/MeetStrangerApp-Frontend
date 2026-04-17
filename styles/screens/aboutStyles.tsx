// Importa utilitário para criação de estilos otimizados no React Native
import { StyleSheet } from 'react-native';

// Importa as cores centralizadas do sistema (tema)
import { Colors } from '../../constants/colors';

// Importa tokens de espaçamento do design system
import { Spacing } from '../../desing-system/tokens/spacing';

// Importa estilos tipográficos prontos
import { TextStyles } from '../../desing-system/tokens/typography';

// Cria e exporta os estilos da tela "About"
export const aboutStyles = StyleSheet.create({

  // Container principal da tela
  container: {
    flex: 1, // Faz a view ocupar toda a tela
    backgroundColor: Colors.background, // Cor de fundo padrão do app
  },

  // Cabeçalho da tela
  header: {
    paddingTop: Spacing['4xl'],    // Espaço superior (status bar / respiro)
    paddingHorizontal: Spacing.xl, // Espaçamento lateral
    paddingBottom: Spacing.xl,     // Espaço inferior do header
  },

  // Botão de voltar
  backButton: {
    ...TextStyles.body,            // Aplica estilo padrão de texto (16px, leitura)
    color: Colors.primary,         // Cor azul principal (ação)
    fontWeight: '500',             // Peso médio (destaque leve)
    marginBottom: Spacing.lg,      // Espaço abaixo do botão
  },

  // Título principal da tela
  title: {
    ...TextStyles.h1,              // Estilo de heading principal
    color: Colors.textPrimary,     // Cor principal do texto
  },

  // Área de conteúdo
  content: {
    paddingHorizontal: Spacing.xl, // Espaçamento lateral consistente
    paddingBottom: Spacing['3xl'], // Espaço inferior da tela
  },

  // Bloco de seção
  section: {
    marginBottom: Spacing['3xl'],  // Espaço entre seções
  },

  // Título de seção
  sectionTitle: {
    ...TextStyles.h3,              // Subtítulo (hierarquia menor que h1)
    color: Colors.textPrimary,     // Cor principal
    marginBottom: Spacing.md,      // Espaço abaixo do título
  },

  // Texto padrão da seção
  text: {
    ...TextStyles.body,            // Texto base (legível)
    color: Colors.textSecondary,   // Cor secundária (menos destaque)
    marginBottom: Spacing.sm,      // Espaço entre parágrafos
  },

  // Texto de lista (bullet point)
  bulletPoint: {
    ...TextStyles.body,            // Mantém consistência com texto padrão
    color: Colors.textSecondary,   // Cor secundária
    marginLeft: Spacing.lg,        // Indentação (simula lista)
    marginBottom: Spacing.xs,      // Espaço entre itens da lista
  },

  // Rodapé da tela
  footer: {
    alignItems: 'center',          // Centraliza horizontalmente
    paddingTop: Spacing['3xl'],    // Espaço acima do footer
    borderTopWidth: 1,             // Linha superior
    borderTopColor: Colors.border, // Cor da borda
  },

  // Texto da versão do app
  version: {
    ...TextStyles.caption,         // Texto menor (caption)
    color: Colors.textSecondary,   // Cor secundária
    marginBottom: Spacing.sm,      // Espaço abaixo
  },

  // Texto de copyright
  copyright: {
    ...TextStyles.caption,         // Texto pequeno
    color: Colors.textSecondary,   // Cor secundária
    textAlign: 'center',           // Centraliza o texto
  },
});
