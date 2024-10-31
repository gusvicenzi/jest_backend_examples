export const sum = (...args: number[]) => {
  const result = args.reduce((total, num) => total + num, 0)
  return result
}
