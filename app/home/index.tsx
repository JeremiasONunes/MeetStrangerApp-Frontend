// Importa o React, necessário para utilizar JSX
import React from 'react';
// Importa os componentes primitivos de layout (View) e texto (Text) do React Native
import { Text, View } from 'react-native';
// Importa o hook de navegação do Expo Router para redirecionar entre telas
import { useRouter } from 'expo-router';
// Importa o hook personalizado de autenticação para acessar dados do usuário e a função de logout
import { useAuth } from '../../hooks/useAuth';
// Importa o componente de botão reutilizável da aplicação
import { Button } from '../../components/Button';
// Importa os estilos específicos da tela Home, renomeados como `styles` para uso local
import { homeStyles as styles } from '../../styles/screens/homeStyles';
// Importa flag de modo dev
import { DEV_MODE } from '../../services/config';

// Componente padrão da tela Home, exibida após o login bem-sucedido
export default function Home() {
  const router = useRouter();          // Instância do roteador para navegar entre telas
  const { user, logout } = useAuth();  // Obtém o usuário autenticado e a função de logout do contexto

  // Navega para a tela de seleção de categoria de chat
  const handleStartChat = () => {
    router.push('/chat/select'); // Empilha a rota '/chat/select' na pilha de navegação
  };

  // Navega para a tela "Sobre o App"
  const handleAbout = () => {
    router.push('/about'); // Empilha a rota '/about' na pilha de navegação
  };

  // Realiza o logout do usuário e redireciona para a tela inicial
  const handleLogout = async () => {
    await logout();       // Aguarda o encerramento da sessão (API + WebSocket + estado)
    router.replace('/');  // Substitui a rota atual pela tela raiz, impedindo voltar ao Home sem login
  };

  return (
    // Container principal que ocupa toda a tela, estilizado pelo styles.container
    <View style={styles.container}>
      {/* Seção de cabeçalho com saudação ao usuário */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Olá, {user?.username || 'Stranger'}!</Text>  {/* Exibe o nome do usuário logado; usa optional chaining para evitar erro se user for null */}
        <Text style={styles.subtitle}>Pronto para se conectar com novas pessoas?</Text>  {/* Subtítulo motivacional */}
      </View>

      {/* Seção central com o card de apresentação do app e os ícones de funcionalidades */}
      <View style={styles.content}>
        {/* Card descritivo do MeetStranger */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎭 MeetStranger</Text>  {/* Título do card com emoji decorativo */}
          <Text style={styles.cardDescription}>
            Converse com pessoas do mundo todo. 
            Escolha um tópico de interesse e comece uma conversa interessante!  {/* Descrição resumida do propósito do app */}
          </Text>
        </View>

        {/* Linha de ícones destacando características do app */}
        <View style={styles.features}>
          {/* Feature: alcance global */}
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🌍</Text>       {/* Ícone representando alcance global */}
            <Text style={styles.featureText}>Global</Text>   {/* Rótulo da feature */}
          </View>
          {/* Feature: comunicação instantânea */}
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>⚡</Text>              {/* Ícone representando velocidade/instantaneidade */}
            <Text style={styles.featureText}>Instantâneo</Text>     {/* Rótulo da feature */}
          </View>
        </View>
      </View>

      {/* Seção de botões de ação principal */}
      <View style={styles.buttons}>
        {/* Botão primário: inicia o fluxo de seleção de chat */}
        <Button
          title="Começar a Conversar"
          onPress={handleStartChat}   // Navega para a seleção de categoria
          style={styles.button}
        />
        {/* Botão secundário com estilo de contorno: abre a tela Sobre */}
        <Button
          title="Sobre o App"
          onPress={handleAbout}       // Navega para a tela About
          variant="outline"           // Estilo visual alternativo (apenas borda, sem fundo)
          style={styles.button}
        />
        {/* Botão de logout com estilo secundário */}
        <Button
          title="Sair"
          onPress={handleLogout}      // Encerra a sessão e redireciona para a raiz
          variant="secondary"         // Estilo visual secundário (menos destaque)
        />
        {/* Botão visível apenas em DEV_MODE para acessar o painel de navegação de telas */}
        {DEV_MODE && (
          <Button
            title="⚙️ Dev: Navegar Telas"
            onPress={() => router.push('/dev')}
            variant="secondary"
          />
        )}
      </View>
    </View>
  );
}
