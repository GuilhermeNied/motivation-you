const backgroundColors = ['#33F159', '#FF4539', '#FF48B0', '#3366FF', '#FF8B3D']

export function randomBackgroundColor() {
  const randomIndex = Math.floor(Math.random() * backgroundColors.length)
  const randomBackgroundColor = backgroundColors[randomIndex]

  return randomBackgroundColor
}
