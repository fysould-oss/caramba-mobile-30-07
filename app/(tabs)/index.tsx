import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Compact schedule per day (one line each) for each year
const primeiroAno = [
  'Seg 13:30 Português | 16:20 Matemática | 18:00 PW1',
  'Ter 13:30 Matemática | 16:20 Biologia | 18:00 Geografia',
  'Qua 13:30 Português | 16:20 História | 18:00 PW1',
  'Qui 13:30 Geografia | 16:20 Matemática | 18:00 Biologia',
  'Sex 13:30 Português | 16:20 Matemática | 18:00 História',
];

const segundoAno = [
  'Seg 13:30 Português | 16:20 Matemática | 18:00 PW2',
  'Ter 13:30 Matemática | 16:20 Geografia | 18:00 Biologia',
  'Qua 13:30 Português | 16:20 História | 18:00 PW2',
  'Qui 13:30 Mobile | 16:20 PW2 | 18:00 Geografia',
  'Sex 13:30 Português | 16:20 Matemática | 18:00 Mobile',
];

const terceiroAno = [
  'Seg 13:30 PW3 | 16:20 Mobile | 18:00 Português',
  'Ter 13:30 Biologia | 16:20 QTS | 18:00 IPS',
  'Qua 13:30 Matemática | 16:20 Filosofia | 18:00 Sociologia',
  'Qui 13:30 PW3 | 16:20 Mobile | 18:00 TCC',
  'Sex 13:30 Biologia | 16:20 QTS | 18:00 Português',
];

export default function HomeScreen() {
  const [openCronograma, setOpenCronograma] = useState(false);
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

        {/* Cronograma: cartão quadrado que abre o cronograma completo */}
        <CronogramaCard
          primeiroAno={primeiroAno}
          segundoAno={segundoAno}
          terceiroAno={terceiroAno}
        />
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

function CronogramaCard({ primeiroAno, segundoAno, terceiroAno }: { primeiroAno: string[]; segundoAno: string[]; terceiroAno: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.cronogramaCard}
        activeOpacity={0.8}
        onPress={() => setOpen((v) => !v)}
      >
        <ThemedText type="title" style={styles.cronogramaCardText}>Cronograma de aulas</ThemedText>
      </TouchableOpacity>

      {open && (
        <ThemedView style={styles.cronogramaContainer}>
          <View style={styles.anoCard}>
            <Collapsible title="Primeiro Ano" defaultOpen>
              {primeiroAno.map((item, i) => (
                <ThemedText key={i} type="default" style={styles.anoItem}>{item}</ThemedText>
              ))}
            </Collapsible>
          </View>

          <View style={styles.anoCard}>
            <Collapsible title="Segundo Ano" defaultOpen>
              {segundoAno.map((item, i) => (
                <ThemedText key={i} type="default" style={styles.anoItem}>{item}</ThemedText>
              ))}
            </Collapsible>
          </View>

          <View style={styles.anoCard}>
            <Collapsible title="Terceiro Ano" defaultOpen>
              {terceiroAno.map((item, i) => (
                <ThemedText key={i} type="default" style={styles.anoItem}>{item}</ThemedText>
              ))}
            </Collapsible>
          </View>
        </ThemedView>
      )}
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
  buttonContainer: {
    marginTop: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#00d4ff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  containerModal: {
    flex: 1,
    padding: 20,
  },
  scroll: {
    marginTop: 16,
  },
  contentContainer: {
    paddingBottom: 40,
    gap: 12,
  },
  item: {
    marginVertical: 4,
  },
  cronogramaCard: {
    width: '100%',
    aspectRatio: 4 / 1,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00d4ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  cronogramaCardText: {
    color: '#00d4ff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cronogramaContainer: {
    backgroundColor: 'transparent',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 255, 0.12)',
    marginTop: 8,
  },
  anoSection: {
    marginBottom: 10,
  },
  anoCard: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 255, 0.12)',
    marginVertical: 8,
  },
  anoItem: {
    color: '#000000',
    marginLeft: 6,
    marginBottom: 6,
    fontSize: 14,
  },
  footer: {
    marginTop: 18,
    alignItems: 'center',
  },
});
