import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import { MotivationCard } from './src/components/MotivationCard';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent style="auto" />
      <View>
        <Text style={styles.title}>Motivation U</Text>
      </View>
      <View style={styles.motivationCardContainer}>
        <MotivationCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray800,
    alignItems: 'center',
    padding: 25,
    gap: 100
  },
  title: {
    color: colors.purple700,
    fontWeight: '700',
    fontSize: 30,
    marginTop: 100
  },
  motivationCardContainer: {
    width: '100%',
    alignSelf: 'center',
  }
});
