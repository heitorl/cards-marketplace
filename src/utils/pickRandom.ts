export const pickRandom = <T>(array: T[], amount: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, amount)
}
