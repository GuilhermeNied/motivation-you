import { useEffect, useState } from "react";
import { motivationTexts } from "../utils/motivationTexts";

export function useMotivationText() {
  const [motivationText, setMotivationText] = useState<string>('')

  const getRandomNewMotivationText = () => {
    const motivationTextsRandomIndex = Math.floor(Math.random() * motivationTexts.length)
    const randomMotivationText = motivationTexts[motivationTextsRandomIndex]
    setMotivationText(randomMotivationText)
  }


  return {
    motivationText,
    getRandomNewMotivationText
  }
}