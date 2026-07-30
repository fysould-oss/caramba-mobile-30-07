import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.background}>

      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styles.background}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.titulo}>ETEC Adolpho Berezin</Text>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Desenvolvimento de Sistemas</Text>
          <Text style={styles.descricao}>
            Curso completo para desenvolvedores desktop, web e mobile
          </Text>
        </View>
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
    backgroundColor: "#0a0a0a",
    padding: 16,
  },
  container: {
    paddingTop: 16,
  },
  titulo: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.03)",
    padding: 12,
    borderRadius: 8,
  },
  subtitulo: {
    color: "#00d4ff",
    fontSize: 16,
    fontWeight: "bold",
  },
  descricao: {
    color: "#CCC",
    marginTop: 6,
  },

  fichaTecnica: {
    backgroundColor: "rgba(0, 212, 255, 0.05)",
    width: "100%",
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(0, 212, 255, 0.3)",
    marginBottom: 16,
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
