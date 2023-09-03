import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { colors } from "../../theme/colors";
import { useMotivationText } from "../../hooks/useMotivationText";
import { useEffect, useState } from "react";

export function MotivationCard() {
  const { motivationText, getRandomNewMotivationText, } = useMotivationText()
  const backgroundColors = ['#2CD44E',
    '#E83F33',
    '#FF48B0',
    '#3366FF',
    '#FF8B3D',]

  const [color, setColor] = useState<string>('')

  const handleGetANewMotivationText = () => {
    getRandomNewMotivationText()
    getRandomBackgroundColor()
  }

  const getRandomBackgroundColor = () => {
    const randomBackgroundColorIndex = Math.floor(Math.random() * backgroundColors.length)
    const randomBackgroundColor = backgroundColors[randomBackgroundColorIndex]
    setColor(randomBackgroundColor)
  }

  useEffect(() => {
    getRandomBackgroundColor()
  }, [])

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleGetANewMotivationText} style={[styles.motivationCardContainer, { backgroundColor: color }]}>
      <Text style={styles.motivationCardText}>
        {motivationText}
      </Text>
      <Text style={styles.motivationCardHelpText}>Clique aqui para  gerar uma nova motivação</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  motivationCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
    gap: 10,
    padding: 25

  },
  motivationCardText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center'
  },
  motivationCardHelpText: {
    color: colors.gray300,
  }
});