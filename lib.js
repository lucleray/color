export const TOTAL_COLORS = 60_000

export function getColorFromInt(i) {
  return Number(i).toString(16).padStart(6, '0').slice(-6)
}
