import React from 'react';
// Importamos o básico do react-native (essencial para não dar erro de 'não encontrado')
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    // SafeAreaView ou View para a cor de fundo não vazar
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView 
        // A "janela" por onde vemos o conteúdo
        style={styles.background} 
        // O "recheio" que realmente rola
        contentContainerStyle={styles.container}
      >
        <Text style={styles.titulo}>ETEC Adolpho Berezin</Text>
        
        <View style={styles.card}>
          <Text style={styles.subtitulo}>3MD2</Text>
          <Text style={styles.descricao}>
          Técnico em Desenvolvimento de Sistemas
          </Text>
        </View>

        <Text style={styles.textoFundo}>Arraste para ver mais</Text>
      </ScrollView>

{/* --- TABELA FIXA: FICHA TÉCNICA --- */}
<View style={styles.fichaTecnica}>
  
  <View style={styles.fichaLinha}>
    <Text style={styles.fichaLabel}>Carga Horária Total:</Text>
    <Text style={styles.fichaValor}>1.200h</Text>
  </View>

  <View style={styles.fichaLinha}>
    <Text style={styles.fichaLabel}>Parte Técnica:</Text>
    <Text style={styles.fichaValor}>800h</Text>
  </View>

  <View style={styles.fichaLinha}>
    <Text style={styles.fichaLabel}>Base Comum:</Text>
    <Text style={styles.fichaValor}>400h</Text>
  </View>

  <View style={styles.fichaLinha}>
    <Text style={styles.fichaLabel}>Período:</Text>
    <Text style={styles.fichaValor}>Vespertino</Text>
  </View>

  <View style={styles.fichaLinhaSemBorda}>
    <Text style={styles.fichaLabel}>Horário:</Text>
    <Text style={styles.fichaValor}>
      Seg a Sex das 13:30 às 18:50
    </Text>
  </View>

</View>

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFC0CB', // Azul Marinho Profundo
  },
  container: {
    // IMPORTANTE: flexGrow permite que o justifyContent funcione no ScrollView
    flexGrow: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center', // Alinhamento Vertical Central
    gap: 20,
  },
  titulo: {
    color: '#FFF', // Azul ciano brilhante (estilo Tech)
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Branco transparente
    padding: 20,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  subtitulo: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
  descricao: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  textoFundo: {
    color: '#FFF',
    fontSize: 12,
    marginTop: 20,
    textTransform: 'uppercase',
  },

  

  fichaTecnica: {
    backgroundColor: "rgba(0, 212, 255, 0.05)",
    width: "100%",
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(0, 212, 255, 0.3)",
  },

  fichaLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },

  fichaLinhaSemBorda: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },

  fichaLabel: {
    color: "#00d4ff",
    fontWeight: "bold",
    fontSize: 14,
  },

  fichaValor: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "right",
    flex: 1,
    marginLeft: 10,
  },

  tabelaContainer: {
    width: "100%",
    marginBottom: 10,
  },

  linhaHeader: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 212, 255, 0.15)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00d4ff",
    justifyContent: "space-between",
  },



});
