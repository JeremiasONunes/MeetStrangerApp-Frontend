// Importa utilitário para criação de estilos otimizados no React Native
import { StyleSheet } from 'react-native';

// Importa as cores do sistema (tema global)
import { Colors } from '../../constants/colors';

// Importa tokens de espaçamento, bordas e layout
import { BorderRadius, Layout, Spacing } from '../../design-system/tokens/spacing';

// Importa estilos tipográficos reutilizáveis
import { TextStyles } from '../../design-system/tokens/typography';

// Cria e exporta os estilos da tela de chat
export const chatRoomStyles = StyleSheet.create({

  // Container principal que envolve toda a tela
  container: {
    flex: 1, // Faz ocupar toda a altura disponível
    backgroundColor: Colors.background, // Define a cor de fundo padrão
  },

  // Cabeçalho superior do chat
  header: {
    flexDirection: 'row', // Organiza elementos na horizontal
    alignItems: 'center', // Alinha verticalmente ao centro
    justifyContent: 'space-between', // Distribui elementos com espaço entre eles
    paddingHorizontal: Spacing.lg, // Espaçamento lateral
    paddingTop: Spacing['4xl'], // Espaço superior (status bar / notch)
    paddingBottom: Spacing.lg, // Espaço inferior
    backgroundColor: Colors.surface, // Cor de fundo do header
    borderBottomWidth: 1, // Adiciona linha inferior
    borderBottomColor: Colors.border, // Cor da linha
  },

  // Botões do cabeçalho (ex: voltar ou sair)
  headerButton: {
    paddingHorizontal: Spacing.md, // Espaço interno lateral
    paddingVertical: Spacing.sm, // Espaço interno vertical
    borderRadius: BorderRadius.md, // Arredondamento das bordas
    backgroundColor: Colors.primary, // Cor principal do botão
    minWidth: 60, // Largura mínima para manter consistência
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },

  // Texto dentro do botão do header
  headerButtonText: {
    ...TextStyles.caption, // Aplica estilo de texto pequeno
    color: Colors.background, // Cor clara para contraste
    fontWeight: '600', // Peso semi-negrito
  },

  // Área central do header (título + status)
  headerCenter: {
    alignItems: 'center', // Centraliza os elementos
  },

  // Título principal do chat
  headerTitle: {
    ...TextStyles.title, // Estilo de título
    color: Colors.primary, // Cor principal do texto
  },

  // Texto que mostra o status da conexão
  connectionStatus: {
    ...TextStyles.small, // Texto pequeno
    color: Colors.textSecondary, // Cor secundária (menos destaque)
    marginTop: Spacing.xs, // Pequeno espaçamento acima
  },

  // Lista de mensagens (geralmente FlatList)
  messagesList: {
    flex: 1, // Ocupa o restante da tela
  },

  // Conteúdo interno da lista (espaçamentos)
  messagesContent: {
    paddingVertical: Spacing.lg, // Espaçamento vertical das mensagens
    paddingBottom: Spacing['4xl'], // Espaço extra no final (input não sobrepor)
  },

  // Container do campo de digitação
  inputContainer: {
    flexDirection: 'row', // Input e botão lado a lado
    alignItems: 'flex-end', // Alinha na base (bom para inputs multi-line)
    paddingHorizontal: Spacing.lg, // Espaçamento lateral
    paddingVertical: Spacing.md, // Espaçamento vertical
    paddingBottom: Spacing['4xl'], // Espaço extra (teclado / safe area)
    backgroundColor: Colors.background, // Fundo do input
    borderTopWidth: 1, // Linha superior
    borderTopColor: Colors.border, // Cor da linha
  },

  // Campo de texto onde o usuário digita
  textInput: {
    flex: 1, // Ocupa todo o espaço disponível
    borderWidth: 1, // Borda do input
    borderColor: Colors.border, // Cor da borda
    borderRadius: BorderRadius.full, // Deixa o input arredondado
    paddingHorizontal: Spacing.lg, // Espaçamento interno lateral
    paddingVertical: Spacing.md, // Espaçamento interno vertical
    marginRight: Spacing.md, // Espaço entre input e botão
    maxHeight: 100, // Limita crescimento (multi-line)
    ...TextStyles.body, // Texto padrão
    color: Colors.primary, // Cor do texto digitado
    backgroundColor: Colors.background, // Fundo do input
  },

  // Botão de enviar mensagem
  sendButton: {
    width: Layout.minTouchTarget, // Largura mínima para toque (44px)
    height: Layout.minTouchTarget, // Altura mínima para toque
    borderRadius: BorderRadius.full, // Formato circular
    backgroundColor: Colors.primary, // Cor principal
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
  },

  // Estilo quando botão está desabilitado
  sendButtonDisabled: {
    backgroundColor: Colors.border, // Cor neutra indicando inativo
  },

  // Texto dentro do botão de enviar
  sendButtonText: {
    ...TextStyles.body, // Texto padrão
    color: Colors.background, // Cor clara para contraste
    fontWeight: 'bold', // Destaque no texto
  },
});