import { hexToDec } from './hexToDec'

export function rgbToRgba(hex: string, opacity: number) {
  if (hex.startsWith('#')) hex = hex.slice(1)

  const red = hexToDec(hex.slice(0, 2))
  const green = hexToDec(hex.slice(2, 4))
  const blue = hexToDec(hex.slice(4, 6))

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}
