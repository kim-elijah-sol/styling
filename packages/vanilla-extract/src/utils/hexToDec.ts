export function hexToDec(hex: string): string
export function hexToDec(hex: string) {
  return parseInt(hex, 16).toString().padStart(2, '0')
}
