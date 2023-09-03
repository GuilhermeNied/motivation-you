import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import { MotivationCard } from './src/components/MotivationCard';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent style="auto" />
      <MotivationCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray800,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
});
