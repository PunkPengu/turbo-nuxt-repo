const baseFactor = 1.6
const step = 0.125

export const spacing = {
  0: 0,
  ...Object.fromEntries(
    Array(65)
      .fill(0)
      .map((_, i) => [(i + 1) * step, `${Number(((i + 1) * baseFactor * step).toFixed(3))}rem`]),
  ),
}
