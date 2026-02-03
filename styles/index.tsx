// Estilos das telas
export * from './screens';

// Estilos dos componentes
export * from './components';

// Utilitários de estilo
export const StyleUtils = {
  // Funções utilitárias para estilos podem ser adicionadas aqui
  shadow: (elevation: number) => ({
    shadowOffset: { width: 0, height: elevation / 2 },
    shadowOpacity: 0.1,
    shadowRadius: elevation,
    elevation,
  }),
  
  centerContent: {
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
  
  fullWidth: {
    width: '100%' as const,
  },
  
  flex1: {
    flex: 1,
  },
};